import login from './login.js'
import logout from './logout.js'
import refresh from './refresh.js'
import { combineReducers } from 'redux'

const appReducer = combineReducers({login,logout,refresh})

const rootReducer = function (state,action) {
	//for cleaning user state at logout
	if(action.type === 'LOGOUT_SUCCESS') {
		state = undefined
	} 

	return appReducer(state,action)
}

export default rootReducer