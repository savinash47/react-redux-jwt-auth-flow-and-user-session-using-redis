import React from 'react'
import { connect } from 'react-redux'
import login from '../redux/actions/login.js'
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import { browserHistory } from 'react-router'

const LogIn = React.createClass({

	getInitialState() {
		return {
			email: '',
			password: ''
		}
	},

	componentDidMount() {
		//do more like calling a endpoint and validating token
		if(localStorage.getItem('token') !== null){
			browserHistory.push('/main')
		} 
	},
	handleEmail(event) {
		this.setState({
			email: event.target.value
		})
	},

	handlePassword(event) {
		this.setState({
			password:  event.target.value
		})
	},

	handleSubmit(event) {
		event.preventDefault()
		console.log('submitted')
		let email = this.state.email;
		let password = this.state.password;
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
					<TextField type="text" hintText="email" value={this.state.email} onChange={this.handleEmail} required /> <br />
					<TextField type="password" hintText="password" vale={this.state.password} onChange={this.handlePassword} required />
					<p>email is <strong>email@email.com</strong></p>
					<p>password is <strong>password1@</strong></p>
					<RaisedButton label="Login" secondary={true} type="submit" />
				</form>
			</div>
		);
	}
})

export default connect()(LogIn)