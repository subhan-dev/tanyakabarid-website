import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FormKuesioner from './FormKuesioner';
import FormProfile from './FormProfile';
import Swal from 'sweetalert2';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/subhan-dev">
        Tanyakabar.id
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Profile', 'Tanya Kabar'];

function getStepContent(step, handleChange, input, reCaptcha) {
  switch (step) {
    case 0:
      return <FormProfile handleChange={handleChange} input={input} />;
    case 1:
      return <FormKuesioner handleChange={handleChange} input={input} reCaptcha={reCaptcha} />;
    default:
      throw new Error('Unknown step');
  }
}

const INITIAL_INPUT = {
  name: '',
  gender: '',
  age: '',
  occupation: '',
  A1: '', A2: '', A3: '', A4: '', A5: '', A6: '', A7: '', A8: '', A9: '', A10: '', 
  A11: '', A12: '', A13: '', A14: '', A15: '', A16: '', A17: '', A18: '', A19: '', A20: '', agreement1: true,
};

const Kuesioner = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [input, setInput] = React.useState(INITIAL_INPUT);
  const [button, setButton] = React.useState(false)
  const [captcha, setCaptcha] = React.useState(null)
  console.log(input)

  const [open, setOpen] = React.useState(false);

  const reCaptcha = value => {
    setCaptcha(value)
  }

  const handleClickOpen = () => {
    if(!checkInput(input) || !captcha) {
      Swal.fire({
        icon: 'warning',
        title: 'Silahkan Lengkapi Data',
      })
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    })
  }

  const checkInput = dataObj => {
    let hasil = true
    Object.values(dataObj).forEach(item => {
      if(!item) {
        hasil = false
      }
    })
    return hasil
  }

  const handleNext = () => {
    if(input.name && input.gender && input.age && input.occupation) {
      setActiveStep(activeStep + 1);
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Silahkan Lengkapi Data',
      })
    }
  };

  const handleSubmit = agreement => {
    setButton(true)
    axios.post('http://localhost:2019/user/input', {...input, agreement1: agreement})
      .then(res => {
        console.log(res)
        setActiveStep(0)
        handleClose()
        setInput(INITIAL_INPUT)
        setButton(false)
        Swal.fire({
          icon: 'success',
          title: 'Terima kasih atas partisipasi Kamu dalam Aksi Tanya Kabar',
          showConfirmButton: false,
        })
        setTimeout(() => {
          window.location.href = `http://tanyakabar.id`
        }, 2000)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5" align="center">
            Bagaimana Kabarmu Hari Ini ?<br />
            Mohon isi Data sesuai dengan Kondisi Kehidupan Kamu Saat Ini
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper} style={{paddingTop: '40px'}} >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you.
                </Typography>
                <Typography variant="subtitle1">
                  Salam
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, handleChange, input, reCaptcha)}
                <div className={classes.buttons} style={{marginTop: '24px'}}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={activeStep === steps.length - 1 ? handleClickOpen : handleNext}
                    className={classes.button}
                    disabled={button}
                  >
                    {/* <CircularProgress color="secondary" size={24} /> */}
                    {activeStep === steps.length - 1 ? 'Kabarkan' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Apakah kamu bersedia jika kabar yang telah kamu berikan, kami memunculkan dalam kegiatan kabar minggu ini ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleSubmit(true)} color="primary">
            Bersedia
          </Button>
          <Button onClick={() => handleSubmit(false)} color="primary">
            Tidak Bersedia
          </Button>
        </DialogActions>
      </Dialog>

    </React.Fragment>
  );
};

export default Kuesioner;