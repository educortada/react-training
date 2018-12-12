import React, { Component } from 'react';
import cars from '../data/cars.json'

export default class Cars extends Component{
    render(){
        return(
            <ul>
                {
                    cars.map(car => {
                        return(
                            <li key = {car.id}>
                                <p><strong>Nombre:</strong> {car.name}</p>
                                <p><strong>Marca:</strong> {car.company}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )    
    }
}