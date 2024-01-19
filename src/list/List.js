import React from 'react'
import Label from '../Label'

function List(props) {
    console.log(props)
  return (
    <div className='list-item'>
      <hr/>
      <div className='list-title'>
        {props.title}
      </div>
      <div className='list-description'>
        {props.descr}
      </div>
      
      <div className='list-label'>
        <Label isActive={props.isActive} />
             
      </div>
      <hr/>
    </div> 
  )
}

export default List