import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            repeat: "",
            name: "",
            lastname: ""
        }
        this.updateEmailField = this.updateEmailField.bind(this);
    }

    updateEmailField = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(e.target.value) 
    }

    render() {
        return (
            <div>
                <h1>
                    {JSON.stringify(this.state,1,1)}
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Email:
                        </label>
                        <input type="email" name="email" value={this.state.email} onChange={this.updateEmailField}></input>
                    </div>
                    <div>
                        <label>
                            Password:
                        </label>
                        <input type="text" name="password" value={this.state.password} onChange={this.updateEmailField}></input>
                    </div>
                    <div>
                        <label>
                            Repeat Password:
                        </label>
                        <input type="text" name="repeat" value={this.state.repeat} onChange={this.updateEmailField}></input>
                    </div>
                    <div>
                        <label>
                            Name:
                        </label>
                        <input type="text" name="name" value={this.state.name} onChange={this.updateEmailField} ></input>
                    </div>
                    <div>
                        <label>
                            Last Name:
                        </label>
                        <input type="text" name="lastname" value={this.state.lastname} onChange={this.updateEmailField} ></input>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default SignUp;