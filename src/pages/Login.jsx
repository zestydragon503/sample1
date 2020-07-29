import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  login = async () => {};
  render() {
    return (
      <div className="Container">
        <div className="loginbox shadow p-5">
          <Form className="p-2 mt-5">
            <h1>LOGIN</h1>
            <Form.Group className="mb-3">
              <h3 className="m-0">Email/Username:</h3>
              <Form.Control
                id="email"
                type="text"
                name="email"
                onChange={this.handleChange}
                placeholder="Email/Username"
                className="text-center"
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <h3 className="m-0">Password:</h3>
              <Form.Control
                id="password"
                type="password"
                name="password"
                onChange={this.handleChange}
                placeholder="Password"
                className="text-center"
              />
            </Form.Group>
            <Form.Group className="Log-button">
              <Button onClick={this.login} className="btn" style={{ width: '10rem' }}>
                LOGIN
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}
