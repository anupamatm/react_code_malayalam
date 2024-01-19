import React from 'react'
import Label from '../Label'

function List(props
//   {
//   title,
//   descr,
//   isActive
// }
) {
    console.log(props)
    const{
      title,
      descr,
      isActive
    }=props;

  return (
    <div className='list-item'>
      <hr/>
      <div className='list-title'>
        {title}
      </div>
      <div className='list-description'>
        {descr}
      </div>
      
      <div className='list-label'>
        <Label onAction={()=>{
          console.log('parent clicked')
        }} isActive={isActive} />
             
      </div>
      <hr/>
    </div> 
  )
}

export default List