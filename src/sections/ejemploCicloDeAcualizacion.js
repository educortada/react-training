import React, { Component } from 'react';
import PropTypes from 'prop-types' 

const ANIMALS_IMAGES = {
  panda: 'https://goo.gl/oNbtoq',
  cat: 'https://goo.gl/PoQQXb',
  dolphin: 'https://goo.gl/BbiKCd'
}
const ANIMALS = Object.keys(ANIMALS_IMAGES) 

class AnimalImage extends Component{
  state = {src: ANIMALS_IMAGES[this.props.animal]}
  
  // Stage to update state
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    this.setState({src: ANIMALS_IMAGES[nextProps.animal]})
  }

  render(){
    return(
      <div>
        <p>Selected {this.props.animal}</p>
        <img alt={this.props.animal} src={this.state.src} width='200' />
      </div>
    )
  }
}
AnimalImage.propTypes = {
  animal: PropTypes.oneOf(ANIMALS)
}

class EjemploCicloDeAcualizacion extends Component{
  state = {animal: 'panda'}
  render(){
    return(
      <div>
        <h4>Ciclo de actualización</h4>
        {ANIMALS.map(this._renderAnimalButton)}
        <AnimalImage animal={this.state.animal} />
      </div>
    )
  }
  _renderAnimalButton = (TypeOfAnimal) =>{
    return(
      <button disabled = {TypeOfAnimal === this.state.animal} key={TypeOfAnimal} onClick = { () => this.setState({ animal: TypeOfAnimal})}>
        {TypeOfAnimal}
      </button>
    )
  }
}
export default EjemploCicloDeAcualizacion