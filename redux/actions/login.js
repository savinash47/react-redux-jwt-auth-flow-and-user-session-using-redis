import { browserHistory } from 'react-router';
import fetch from 'isomorphic-fetch'

function loginRequest() {
	return {
		type: 'LOGIN_REQUEST'
	}
}

function loginFailure() {
	return {
		type: 'LOGIN_FAILURE'
	}
}

function loginSuccess(token) {
	localStorage.setItem('token',token)
	return {
		type: 'LOGIN_SUCCESS'
	}
}

export default function login(userData) {
	console.log(userData)
	return function(dispatch){
		dispatch(loginRequest())
		return fetch('http://localhost:8888/login',{
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		}).then(function(response){
			if(response.status !== 200){
				throw new Error(response.statusText)
			}
			return response.json()
		}).then(function(response){
			console.log(response.token)
			dispatch(loginSuccess(response.token))
			browserHistory.push('/main')
		}).catch(function(error){
			dispatch(loginFailure())
			console.log(error)
		})
	}
}