import React from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/lib/raised-button';

const App = React.createClass({
	render() {
		return (
			<div>
				{this.props.children || <span>
				<h2>This is home page</h2>
				<p>Click on Login to go to login page</p>
				<Link to="/login"><RaisedButton primary={true} label="Login" /></Link> 
				<br />
				<br />
				<Link to="/main"><RaisedButton primary={true} label="Main Page" /></Link>
				<p>When you click on the main page without login it will take you to login page</p>
				<p>But when you you are logged in it takes you to the main page</p>
				</span>}
			</div>
		);
	}
})


export default App