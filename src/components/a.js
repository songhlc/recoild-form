import React from 'react'
import {useRecoilState} from 'recoil'
import listState from '../sharestate/listState'
export default (prpos) => {
  const [list ,setList] = useRecoilState(listState)
  return <div>
    there is a list:
    <ul>
      {list.map(item => {
        return <li>{item.name + ':' + item.age}</li>
      })}
    </ul>
  </div>
}