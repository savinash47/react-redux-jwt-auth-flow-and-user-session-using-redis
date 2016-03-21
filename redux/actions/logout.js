import { browserHistory } from 'react-router';
import fetch from 'isomorphic-fetch'

function logoutRequest() {
	localStorage.removeItem('token')
	return {
		type: 'LOGOUT_REQUEST'
	}
}

function logoutSuccess() {
	return {
		type: 'LOGOUT_SUCCESS'
	}
}

export default function logout() {
	return function(dispatch) {
		dispatch(logoutRequest())
		return fetch('http://localhost:8888/logout',{
			method: 'post',
			header: {
				'Content-Type': 'application/json'
			},
		}).then(function(response){
			if(response.status !== 200){
				throw new Error(response.statusText)
			}
			return response.json()
		}).then(function(response){
			dispatch(logoutSuccess())
			browserHistory.push('/')
		}).catch(function(error){
			console.log(error)
		})
	}
}