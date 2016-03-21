const login = function(state={
	isLogingIn: false,
	isLoginFailure: false,
	isLoginSucess: false
},action) {
	switch(action.type){
		case 'LOGIN_REQUEST':
			return Object.assign({},state,{
				isLogingIn: true,
				isLoginFailure: false,
				isLoginSucess: false
			})
		case 'LOGIN_FAILURE': 
			return Object.assign({},state,{
				isLogingIn: false,
				isLoginFailure: true,
				isLoginSucess: false
			})
		case 'LOGIN_SUCCESS':
			return Object.assign({},state,{
				isLogingIn: false,
				isLoginFailure: false,
				isLoginSucess: true
			})
		default:
			return state		
	}
}

export default login