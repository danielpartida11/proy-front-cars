import React, { Component, Fragment } from 'react'

import './Home.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            cars: [],
            page: 1,
        }
    }

    async componentDidMount(){
        try {
            const peticionCars = await axios.get('http://localhost:8000/api/cars');
            this.setState({cars: peticionCars.data});
            console.log(this.state.cars);
        } catch (error) {
            console.log(error);
        }
    }

    showResults = () => {
        if (this.state.cars[0]) {
            return(
                this.state.cars.map(car => {
                    return(
                        <Fragment>
                            <div className='container-car' key={car.id}>
                                {car.name}
                                <img className='img-car' onClick={() => this.carSelection(car)} src={car.photo} alt={car.name}/>
                            </div>
                        </Fragment>
                    )
                })
            )
        } else{
            return(
                <div>
                    CARGANDO COCHES...
                </div>
            )
        }
    }

    carSelection = (car) => {
        this.props.history.push('/cars')
        localStorage.setItem('cardetails', JSON.stringify(car))
    }

    render() {
        return (
            <Fragment>
                <div className='container-home'></div>
                <div>{this.showResults()}</div>
            </Fragment>

        )
    }
}
