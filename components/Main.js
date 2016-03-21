import React from 'react'
import logout from '../redux/actions/logout.js'
import refresh from '../redux/actions/refresh.js'
import { connect } from 'react-redux'

const Main = React.createClass({
	handleSubmit(event) {
		event.preventDefault()
		this.props.dispatch(logout())
	},

	componentDidMount() {
		this.refresher = setInterval(this.refreshSession,20000)
	},

	refreshSession() {
		this.props.dispatch(refresh())
	},

	componentWillUnmount() {
		clearInterval(this.refresher)
	},

	render(){
		return (
			<div>
				<h1>Secured page</h1>
				<p>This page will make a request to the server every 20 seconds to refresh the token for the user so the user
				can stay signed in as long as user visits every 5 minutes to the webiste. Usually it should be 7 days and token
				should be refreshed every hour. But for demo purposes it is used as 5 minutes and 20 seconds refresh interval</p>
				<button type="Submit" onClick={this.handleSubmit}>Logout</button>
			</div>
		);
	}
})

export default connect()(Main)