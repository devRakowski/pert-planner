import React from 'react';

interface IinputProps extends HTMLInputElement {
  label: string;
  placeholder: string;
  setValue: (value: string) => void;
}

const Input = ({ label, setValue, otherProps }: inputProps) => (
  <label>
    {label}
    <input onChange={( { target : { val } )=> }
     />
  </label>
);
