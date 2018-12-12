import React, { Component } from 'react';

export default class Box extends Component{
  render(){
    return(
      <div style ={{ borderBottom: '1px solid #d4d4d4', borderTop: '1px solid #d4d4d4', padding: 12}}>
        {this.props.children}
      </div>
    )
  }
}