import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels(props) {

  const value = props.value
  const func = props.func
  const label = props.label

  const handleChange = (event) => {
    func(!value)
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={value}
          onChange={handleChange}
        />
      }
      label={label}
    />

  );
}
