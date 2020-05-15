import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
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

function getStepContent(step, handleChange, input) {
  switch (step) {
    case 0:
      return <FormProfile handleChange={handleChange} input={input} />;
    case 1:
      return <FormKuesioner handleChange={handleChange} input={input} />;
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
  A11: '', A12: '', A13: '', A14: '', A15: '', A16: '', A17: '', A18: '', A19: '', A20: '',
};

const Kuesioner = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [input, setInput] = React.useState(INITIAL_INPUT);
  console.log(input)

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

  const handleSubmit = () => {
    if(!checkInput(input)) {
      Swal.fire({
        icon: 'warning',
        title: 'Silahkan Lengkapi Data',
      })
    } else {
      setActiveStep(0)
      setInput(INITIAL_INPUT)
      Swal.fire({
        icon: 'success',
        title: 'Terima Kasih Telah Memberi Kabar',
      })
    }
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Apa Kabar ?
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper} >
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
                {getStepContent(activeStep, handleChange, input)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Kabarkan' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
};

export default Kuesioner;