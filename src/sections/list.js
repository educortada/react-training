import React, { Component } from 'react';

const numbers = [1, 1, 2, 3, 4, 5]

export default class List extends Component{
    render(){
        return(
        <div>
            <h4>React App</h4> 
            {numbers.map((number, index) => {
                return <p key={index}>Soy el numero {number}</p>
            })}
        </div>
        )    
    }
}