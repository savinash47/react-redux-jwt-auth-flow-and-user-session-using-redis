import React from 'react'
import { connect } from 'react-redux'
import login from '../redux/actions/login.js'

const LogIn = React.createClass({
	handleSubmit(event) {
		event.preventDefault()
		console.log('submitted')
		let email = this.refs.email.value;
		let password = this.refs.password.value;
		let userData = {
			email: email,
			password: password
		}
		this.props.dispatch(login(userData))
	},

	render() {
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="email" ref="email" required></input>
					<input type="password" placeholder="password" ref="password" required></input>
					<p>email is <strong>email@email.com</strong></p>
					<p>password is <strong>password1@</strong></p>
					<button type="submit">login</button>
				</form>
			</div>
		);
	}
})

export default connect()(LogIn)