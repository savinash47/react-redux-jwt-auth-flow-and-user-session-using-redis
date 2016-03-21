const logout = function(state = {
	isLoggingOut: false,
	isLoggedOut: true
}, action) {
	switch(action.type) {
		case 'LOGOUT_REQUEST':
			return Object.assign({},state,{
				isLoggingOut: true,
				isLoggedOut: false
			})
		case 'LOGOUT_SUCCESS':
			return Object.assign({},state,{
				isLoggingOut: false,
				isLoggedOut: true
			})	
		default: 
			return state	
	}
}

export default logout