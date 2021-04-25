import React from 'react'
import {useRecoilState} from 'recoil'
import listState from '../sharestate/listState'
const List = (prpos) => {
  const [listData] = useRecoilState(listState)
  return( 
    <ul>
    {
      listData.map((item, key) => {
        return <li key={key}>{item.name + ':' + item.age}</li>
      })
    }
  </ul>)
}
export default List