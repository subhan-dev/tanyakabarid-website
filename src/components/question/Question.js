import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default ({ data, handleChange }) => {
  const name = `A${data.id}`
  return (
    <FormControl component="fieldset" style={{padding: '0'}}>
      <FormLabel component="legend" style={{fontSize: '1rem', fontWeight: 400, color: 'black', marginBottom: '10px', paddingTop: '16px', lineHeight: '1.6'}}>{data.question}</FormLabel>
      <RadioGroup aria-label={name} name={name} onChange={handleChange}>
        {data.answer.map(item => {
          return (
            <FormControlLabel value={item} control={<Radio color="primary" size="small"/>} label={item} />
          )
        })}
      </RadioGroup>
    </FormControl>
  )
}