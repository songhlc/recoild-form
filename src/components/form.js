import React, { useEffect } from 'react'
import Input from './input'
import InputNumber from './input'
import Select from './select'
import { useForm } from "react-hook-form";
const CompMap = {
  input: Input,
  inputnumber: InputNumber,
  select: Select
}

const Form = function (props) {
  const {config, onSubmit, formRef, formData} = props
  const { register, handleSubmit} = useForm();
  const formSubmit = data => {
    onSubmit(data)
  };
  return <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
    {config.map((item, key) => {
      var Comp = CompMap[item.type || 'input']
      return <Comp key={key} {...item} {...register(item.key)}></Comp>
    })}
    <button type="submit"  style={{display:'none'}}>submit</button>
  </form>
}
export default Form