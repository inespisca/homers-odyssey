import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        }
        this.updateEmailField = this.updateEmailField.bind(this);
    }

    updateEmailField = (e) => {
        this.setState({
            email: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <h1>
                    Email: {this.state.email}
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Email:
                        </label>
                        <input type="email" name="email" value={this.state.email} onChange={this.updateEmailField}></input>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

// - Calling SignUp component on App.js - DONE
// - Display input field - DONE
// - Display an email address inside H1 - DONE
// - On change for edits on the field - DONE
// - Assign function updateEmailField - DONE
// - bind(this) - DONE
// - updateEmailField(event) -> e.target.value - DONE
// - Function returns an e-mail - DONE
// - Apend e-mail to <h1> - DONE

export default SignUp;