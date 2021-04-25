import React, {useRef} from 'react'
import {useRecoilState} from 'recoil'
import List from './list'
import Form from './form'
import formState from '../sharestate/formState'
import listState from '../sharestate/listState'
const Page = (props) => {
  const [formData, setFormData] = useRecoilState(formState)
  const [listData, setListData] = useRecoilState(listState)
  const formRef = useRef()
  const config = [{
    key: 'name',
    label: '名称',
    type: 'input'
  }, {
    key: 'sex',
    label: '性别',
    type: 'select'
  }, {
    key: 'age',
    label: '年龄',
    type: 'inputnumber'
  }]
  const Add = () => {
    setListData([...listData, formData])
    formRef.current && formRef.current.reset() 
    setFormData({})
  }
  const onSubmit = (data) => {
    setFormData(data)
  }
  const Save = () => {
    formRef.current && formRef.current.querySelector('button[type="submit"]').click()
    alert('save to formData')
  }
  return (<>
    <header className="App-header">
      <List></List>
    </header>
    <div>
      <Form formRef={formRef} config={config} onSubmit={onSubmit} formData={formData}></Form>
      <button onClick={Save}>Save</button>
      <button onClick={Add}>Add</button>
    </div>
  </>)
}
export default Page