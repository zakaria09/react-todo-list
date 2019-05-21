import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import fire from '../config/fire';
import { Redirect } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: ''
        }
    };

    // schema = {
    //     email: Joi.string().required(),
    //     password: Joi.string().required()
    // };

    // validate = () => {
    //     if (!this.state.email.includes('@')) {
    //         this.setState({ errors: 'Invalid email!' });
    //     };
    // }

    handleChangeEmail = (e) => {
        // const errors = this.validate();
        this.setState({ email : e.target.value });
    };

    handleChangePassword = (e) => {
        // const errors = this.validate();
        this.setState({ password : e.target.value});
    };

    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => window.location = '/create-task')
            .catch(error => this.setState({ errors: error.message }))
    }

    render() { 
        return ( 
        <Form className="container">
            <Form.Group onSubmit={this.login} controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={this.handleChangeEmail} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={this.handleChangePassword} type="password" placeholder="Password" />
            </Form.Group>
            { this.state.errors ? <div class="alert alert-danger" role="alert">{this.state.errors}</div> : null }
            <Button variant="primary" type="submit" onClick={this.login}>
                Login
            </Button>
        </Form>
         );
    }
}
 
export default Login;