"use client"

import { FormControl, Paper } from "@mui/material"
import Autocomplete, { AutocompleteValue } from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"

export default function ComboBox(
  {
    label,
    id,
    options,
    defaultValue,
    onValueChanged 
  } : { 
    label: string,
    id: string,
    options: string[],
    defaultValue?: string[],
    onValueChanged?: (value: string[]) => void 
}) {

  if(!defaultValue)
    defaultValue = [];

  function onChange(
    event: React.SyntheticEvent, 
    value: AutocompleteValue<string[], string[], string[], string[]>, 
  ) {
    event.preventDefault();

    if(value && onValueChanged)
      onValueChanged(value);
  }

  return (
    <FormControl component={Paper}>
      <Autocomplete
        id={id}
        disablePortal
        options={options}
        defaultValue={defaultValue}
        sx={{ width: 300 }}
        multiple={true}
        renderInput={(params) => <TextField {...params} label={label} />}
        onChange={onChange}
      />
    </FormControl>
  )
}