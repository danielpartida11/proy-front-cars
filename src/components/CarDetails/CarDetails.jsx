import React, { Component } from 'react'
import axios from 'axios'

import './CarDetails.css'

export default class CarDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            carSelected: {}
        }
    };

    componentDidMount() {
        let seleccionCar = JSON.parse(localStorage.getItem('cardetails'));
        this.setState({ carSelected: seleccionCar });
        console.log(seleccionCar);
    };


    async buyCar() {
        try {
            await axios.post('http://localhost:8000/api/appointments', this.state.carSelected);
            alert("Coche comprado")
            this.history.push('/')

        } catch(error) {
        console.error(error)
        alert("Error al comprar coche")
    }
}


btnBack() {
    this.props.history.push('/');
};


showDetailCar() {
    if (this.state.carSelected?.id) {
        return (
            <div className="car-details" key={this.state.carSelected.id}>
                <img alt={this.state.carSelected.name} src={this.state.carSelected.photo}></img>
                <div className="name">Nombre: {this.state.carSelected.name}</div>
                <div className="max-speed">Velocidad Máxima: {this.state.carSelected.maxSpeed}</div>
                <div className="tank">Depósito: {this.state.carSelected.tank}</div>
                <div className="prize">Precio: {this.state.carSelected.prize}</div>
            </div>
        )
    } else {
        return (
            <div>CARGANDO LOS DATOS DEL VEHÍCULO...</div>
        )
    }
};

render() {
    return (
        <div className="container-car-details" key={this.state.carSelected.id}>
            {this.showDetailCar()}
            <button onClick={() => this.buyCar()}> BUY CAR</button>
            <button onClick={() => this.btnBack()}> BACK TO HOME PAGE</button>
        </div>
    )
};
}
