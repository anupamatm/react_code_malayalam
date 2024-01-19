// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Tools.css'
export class Tools extends Component {
//   static propTypes = {}
 

  render() {
    const {
        children
    }=this.props;

    const onlyChild = React.Children.only(children)
    const count = React.Children.count(onlyChild.props.children)

    return (
        <div className='list-tools'>
            <div className='list-header'>
                <select name='status'>
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="non-active">Non Active</option>
                </select>
            </div>
            {children}
            <div className='list-footer'>
                <h4>Total {count} items</h4>
            </div>
        </div>
    )
  }
}

export default Tools