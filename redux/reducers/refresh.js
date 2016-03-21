const refresh = function (state={
	isRefreshing: false,
	isRefreshed: false,
	isRefreshFailed: false
},action) {
	switch(action.type) {
		case 'REFERSH_REQUEST':
			return Object.assign({}, state, {
				isRefreshing: true,
				isRefreshed: false,
				isRefreshFailed: false
			})
		case 'REFERSH_FAILURE':
			return Object.assign({}, state, {
				isRefreshing: false,
				isRefreshed: false,
				isRefreshFailed: true
			})
		case 'REFRESH_SUCCESS':
			return Object.assign({},state, {
				isRefreshing: false,
				isRefreshed: true,
				isRefreshFailed: false
			})	
		default: 
			return state		
	}
}

export default refresh