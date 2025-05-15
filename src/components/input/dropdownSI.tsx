"use client";

import { InputData } from "@/lib/types/input";
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import { useEffect, useState } from "react";

export default function DropdownSI({ 
  options,
  label,
  onChange
} : {
  options: InputData[],
  label: string,
  onChange: (value: string) => void
}) {
  const [val, setVal] = useState<string>("");

  useEffect(() => {
    onChange(val);
  }, [val]);


  return (
    <FormControl fullWidth>
      <InputLabel id="types-select-label">{label}</InputLabel>
      <Select
        labelId={`${label}-select-label`}
        id={`${label}-select`}
        value={val}
        label={label}
        onChange={(e)=>setVal(e.target.value)}
      >
      {
        options.map((option, i)=>
          <MenuItem key={i} value={option.value}>{option.verboseName}</MenuItem>
        )
      }
      </Select>
    </FormControl>
  )
}