import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

export default ({ data, handleChange }) => {
  // const [email, setEmail] = React.useState('');
  const [emailActive, setEmailActive] = React.useState(false);
  const name = `A${data.id}`

  const radioChangeEmail = event => {
    if(event.target.value === "1") {
      setEmailActive(true)
      handleChange({
        target: {
          value: "",
          name: "A18"
        }
      })
    } else {
      setEmailActive(false)
      handleChange({
        target: {
          value: "2",
          name: "A18"
        }
      })
    }
  }

  // const handleChangeEmail = event => {
  //   handleChange({
  //     target: {
  //       value: event.target.value,
  //       name: "A18"
  //     }
  //   })
  // }

  if(data.id === 18) {
    return (
      <FormControl component="fieldset" style={{padding: '0'}}>
        <FormLabel component="legend" style={{fontSize: '1rem', fontWeight: 400, color: 'black', marginBottom: '10px', paddingTop: '16px', lineHeight: '1.6'}}>
          {`${data.id}. ${data.question}`}
        </FormLabel>
        <RadioGroup aria-label={name} name={name} onChange={radioChangeEmail}>
          <div style={{position: 'relative'}}>
            <FormControlLabel value="1" control={<Radio color="primary" size="small"/>} label="Input Email" />
            {emailActive && <div className="radioA18"> <TextField name="A18" label="Masukkan Email Anda" onChange={handleChange} /> </div>}
          </div>
          <FormControlLabel value="2" control={<Radio color="primary" size="small"/>} label="Saya tidak ingin orang lain mengetahui Kabar Saya" />
        </RadioGroup>
      </FormControl>
    );
  }

  return (
    <FormControl component="fieldset" style={{padding: '0'}}>
      <FormLabel component="legend" style={{fontSize: '1rem', fontWeight: 400, color: 'black', marginBottom: '10px', paddingTop: '16px', lineHeight: '1.6'}}>
        {`${data.id}. ${data.question}`}
      </FormLabel>
      <RadioGroup aria-label={name} name={name} onChange={handleChange}>
        {data.answer.map((item, index) => {
          return (
            <FormControlLabel value={`${index+1}`} control={<Radio color="primary" size="small"/>} label={item} />
          )
        })}
      </RadioGroup>
    </FormControl>
  )
}