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
        return <span onClick={props.onAction
            // ()=>{
            // console.log('clicked');
            // props.onAction();
        // }
    } className='list-label-item' style={style}> {props.isActive ? "Active" : "Non Active"} </span>
    }
}

export default Label;