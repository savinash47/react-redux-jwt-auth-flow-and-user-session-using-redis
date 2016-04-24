import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import App from '../components/App'
import LogIn from '../components/LogIn'
import Main from '../components/Main'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../redux/reducers/rootReducer.js'

const store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
			<Route path="/login" component={LogIn} />
			<Route path="/main" component={Main} />
			</Route>
		</Router>
	</Provider>,document.getElementById('main'))