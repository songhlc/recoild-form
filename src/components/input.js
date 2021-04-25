import React, { useState, useEffect } from 'react'
const Input = (props) => {
  const {label, ...rest} = props
  return <div>
    <label>{label}</label>
    <input {...rest}></input>
  </div>
}
export default Input