import React from 'react'
import { Link } from 'react-router'

const App = React.createClass({
	render() {
		return (
			<div>
				<p>Click on Login to go to login page</p>
				<Link to='/login'>Login</Link>
				<p>Styling is yet to be done</p>
				<p>There is still a functionality of protecting the personal routes is left.
				 This can be done by checking if user is authenticated by making a server request whenever a 
				 personal component mounts</p>

				<p>Missing parts will be out soon</p>
			</div>
		);
	}
})


export default App