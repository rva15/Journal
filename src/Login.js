import React from 'react';
import './login.css';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameValue : '',
            passwordValue : ''
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({usernameValue: event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({passwordValue: event.target.value})
    }

    handleSubmit(event) {
        // something
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='form-container'>
                <input type="text" value={this.state.usernameValue} onChange={this.handleUsernameChange} className='text-input-style' placeholder="username or email"/>
                <input type="text" value={this.state.passwordValue} onChange={this.handlePasswordChange} className='text-input-style' placeholder="password"/>
                <input type="submit" className='button-style' value="Login"/>
            </form>
        )
    }
}