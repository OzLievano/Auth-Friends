import React, {useState,} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import {Form, FormGroup, Input, Button} from 'reactstrap'

const LogIn = () => {

    const history = useHistory();
    const [logIn,setLogIn] = useState({
        username:'',
        password:''
    })

    const handleChange = (e) => {
        setLogIn({
            ...logIn,[e.target.name]:e.target.value
        })
    }

    const login = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/login", logIn)
        .then(res => {
            console.log('ol: LogIn.js: login res:', res.data.payload)
            localStorage.setItem('token',res.data.payload)
            history.push('/friendslist')
        })
    }
    return (
        <Form className='d-flex justify-content-center mt-3' onSubmit={login}>
            <FormGroup row>
            <h1>Log-In</h1><br/>
                <Input 
                type="text" 
                name="username"
                id="username"
                placeholder="Enter Username"
                value = {logIn.username}
                onChange={handleChange}
                >
                </Input>
                <Input 
                type="text" 
                name="password"
                id="password"
                placeholder="Enter Password"
                value = {logIn.password}
                onChange={handleChange}
                >
                </Input>
                <Button color="primary">Log-In</Button>
                <Button color="secondary">Re-set Password</Button>
            </FormGroup>
        </Form>
    )
}

export default LogIn
