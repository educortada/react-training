import React, { Component } from 'react';

export default class Forms extends Component{
    handleClick = (event) =>{
      event.preventDefault()
      console.log(this.state)
    }
    handleOnChange = (event) =>{
      this.setState({
        inputTerms: event.target.checked
      })
    }

    constructor(){
      super()
      this.state = {
        inputName: 'Edu', 
        inputTwitter: '@', 
        inputTerms: true
      }
    }

    render(){
        return(
        <div>
          <h4>Formularios</h4>
          <form onSubmit={this.handleClick}>
            <p>
              <label htmlFor='name'>Nombre: </label>
              <input id='name' name="userName" placeholder="Introduce tu nombre" value={this.state.inputName} onChange={ event => {this.setState({ inputName: event.target.value})} } />
            </p>
            <p>
              <label htmlFor='twitter'>Twitter: </label>
              <input id='twitter' name="twitterAccount" placeholder="Introduce tu Twitter" value={this.state.inputTwitter} onChange={ event => {this.setState({ inputTwitter: event.target.value})} } />          
            </p>
            <div>
              <label>
                <input type='checkbox' onChange={this.handleOnChange} checked={this.state.inputTerms} />
                Acepto la politica de privacidad
              </label>
            </div>
            <button>Enviar</button>
          </form>
        </div>
        )    
    }
}