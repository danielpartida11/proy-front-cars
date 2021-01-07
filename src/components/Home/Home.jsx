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

    render() {
        return (
            <div className='Home'>
                
            </div>
        )
    }
}
