import axios from 'axios'
import cookie from 'react-cookie'
import { AUTH_USER,
         AUTH_ERROR,
         UNAUTH_USER,
         PROTECTED_TEST,
		 CHART_DATA } from './types'

const API_URL = 'http://localhost:3030/api'
const CLIENT_ROOT_URL = 'http://localhost:3000'

export function errorHandler(dispatch, error, type) {
	let errorMessage = ''

	if(error.data.error) {
		errorMessage = error.data.error
	} else if (error.data) {
		errorMessage = error.data
	} else {
		errorMessage = error
	}

	if(error.status === 401) {
		dispatch({
			type: type,
			payload: 'You are not authorized to do this. Please login and try again.'
		})
		logoutUser()
	} else {
		dispatch({
			type: type,
			payload: errorMessage
		})
	}
}

export function loginUser({ email, password }) {
	return function(dispatch) {
		axios.post(`${API_URL}/auth/login`, { email, password }).then(response => {
			cookie.save('token', response.data.token, { path: '/' })
			dispatch({ type: AUTH_USER })
			window.location.href = CLIENT_ROOT_URL + '/dashboard'
		}).catch((error) => {
			errorHandler(dispatch, error.response, AUTH_ERROR)
		})
	}
}

export function registerUser({ email, name, username, password }) {  
	return function(dispatch) {
		axios.post(`${API_URL}/auth/register`, { email, name, username, password }).then(response => {
			cookie.save('token', response.data.token, { path: '/' })
			dispatch({ type: AUTH_USER })
			window.location.href = CLIENT_ROOT_URL + '/dashboard'
		}).catch((error) => {
			errorHandler(dispatch, error.response, AUTH_ERROR)
		})
	}
}

export function logoutUser() {  
	return function (dispatch) {
		dispatch({ type: UNAUTH_USER })
		cookie.remove('token', { path: '/' })

		window.location.href = CLIENT_ROOT_URL + '/login'
	}
}

export function protectedTest() {  
	return function(dispatch) {
		axios.get(`${API_URL}/protected`, {
			headers: { 'Authorization': cookie.load('token') }
		}).then(response => {
			dispatch({
				type: PROTECTED_TEST,
				payload: response.data.content
			})
		}).catch((error) => {
			errorHandler(dispatch, error.response, AUTH_ERROR)
		})
	}
}

///CHART ACTIONS
export function chartData(data) {
	return function(dispatch) {
		axios.get('/compute' , {
			params: {
				data: data
			}
		})
		.then(function (response) {
			dispatch({
				type: CHART_DATA,
				payload: response.data
			})
		})
		.catch(function (error) {
			console.log(error);
		});
	}
}
