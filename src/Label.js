import React from 'react'
import './list/Label.css'
// function Label() {
//   return (
//     <span>label A </span>
//   )
// }

// export default Label

class Label extends React.Component{
    render(){
        const props = this.props;
        console.log("label props",props)
        const style = props.isActive ? {background:'green'} : {background:'orange'}
        return <span className='list-label-item' style={style}> label kk </span>
    }
}

export default Label;