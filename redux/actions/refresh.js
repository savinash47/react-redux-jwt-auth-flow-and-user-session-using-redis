import { browserHistory } from 'react-router';
import fetch from 'isomorphic-fetch'

function refreshRequest() {
	return {
		type: 'REFRESH_REQUEST'
	}
}

function refreshSuccess() {
	return {
		type: 'REFRESH_SUCCESS'
	}
}

function refershFailure() {
	localStorage.removeItem('token')
	browserHistory.push('/')
	return {
		type: 'REFRESH_FAILURE'
	}
}

export default function refresh() {
	return function(dispatch){
		dispatch(refreshRequest())
		console.log(localStorage.getItem('token'))
		return fetch('http://localhost:8888/refresh',{
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				'Auth': localStorage.getItem('token')
			}
		}).then(function(response){
			if(response.status !== 200){
				throw new Error(response.statusText)
			}
			response.json()
		}).then(function(response){
			console.log('comes here')
			dispatch(refreshSuccess())
		}).catch(function(error){
			console.log(error.toString())
			dispatch(refershFailure())

		})
	}
}