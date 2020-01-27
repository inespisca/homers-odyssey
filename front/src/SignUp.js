import React, { Component } from 'react';
import { Button, Snackbar, TextField } from '@material-ui/core';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            repeat: "",
            name: "",
            lastname: "",
            flash: "",
            isOpen: false,
        }
    }

    // In order for signup to work, we must yarn start on both front and back folders at the same time!

    updateInfoField = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    
    handleSubmit = (e) => {
        fetch("/auth/signup",
        {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(this.state),
        })
        .then(res => res.json())
        .then(
            res => this.setState({"flash": res.flash}),
            err => this.setState({"flash": err.flash})
        )
    e.preventDefault();
    }

    handleOpen = () => {
        this.setState((prevState) => ({
          ...prevState,
          isOpen: true
        }))
      }
    
      handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        this.setState((prevState) => ({
          ...prevState,
          isOpen: false
        }))
      };

    render() {
        const { name, lastname, email, password, repeat, flash, isOpen } = this.state;
        return (
            <div>
                <h1>Sign up</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        onChange={this.updateInfoField}
                        value={email}/>
                    <TextField
                        label="Password"
                        type="password"
                        name="password"
                        onChange={this.updateInfoField}
                        value={password}/>    
                    <TextField 
                        label="Repeat password"
                        type="password"
                        name="repeat"
                        onChange={this.updateInfoField}
                        value={repeat}/>
                    <TextField
                        label="Name"
                        type="name"
                        name="name"
                        onChange={this.updateInfoField}
                        value={name}/>
                    <TextField
                        label="Lastname"
                        type="lastname"
                        name="lastname"
                        onChange={this.updateInfoField}
                        value={lastname}/>
                    <Button 
                        type="submit"
                        variant="outlined" 
                        color="primary"
                        size="large"
                        onClick={this.handleOpen}>Submit
                    </Button>
                </form>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={isOpen}
                    autoHideDuration={4000}
                    onClose={this.handleClose}
                    message={flash}/>
            </div>
        );
    }
}

export default SignUp;