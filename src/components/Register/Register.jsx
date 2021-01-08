import React from 'react'
import './Register.css';
import axios from 'axios'
import { useHistory } from 'react-router-dom';


const Register = () => {

    const history = useHistory();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const form = event.target;
            const user = {
                name: form.name.value,
                email: form.email.value,
                password: form.password.value,
            }

            await axios.post('http://localhost:8000/api/users', user)
            alert("Usuario registrado")
            history.push('/')

        } catch (error) {
            console.error(error)
            alert("Error al crear usuario")
        }

    };

    return (
        <form className="register" onSubmit={handleSubmit}>
            <h1>Register</h1>
            <input type="text" name="name" placeholder="Introduce your name" />
            <input type="email" name="email" placeholder="Introduce your email" />
            <input type="password" name="password" placeholder="Introduce your password" />
            <button type="submit">Register</button>
        </form>
    )
}

export default Register;