import React, { Component } from 'react';

class LoginButton extends Component{
    render(){
        return <button>Login</button>
    }
}
class LogoutButton extends Component{
    constructor(){
        super()
        this.state = {x: 0, y: 0}
    }
    handleClick(){
        alert('Goodbye!')
    }
    handleMouseMove = (e) => {
        const {clientX, clientY} = e
        // const clientX = e.clientX
        // const clientY = e.clientY
        this.setState({x: clientX, y: clientY})
    }
    render(){
        return(
            <div>
                <p>¡Bienvenido!</p>
                <button onClick = {this.handleClick}>Logout</button>
                
                <div style = { {border: '1px solid #888', marginTop: 10, padding: 24} }
                onMouseMove = {this.handleMouseMove}>
                    <p>{this.state.x}, {this.state.y}</p>
                </div>
            </div>
        )
    }
}
export default class Conditionalsection extends Component{
    constructor(){
        super()
        this.state = {isUserLogged: false}
    }
    render(){
        return(
        <div>
            <h4>React App</h4> 
            {this.state.isUserLogged ? <LoginButton /> : <LogoutButton />}
        </div>
        )    
    }
}