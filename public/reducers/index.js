import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import plot from './plot_reducer'

const rootReducer = combineReducers({
	plot: plot,
	routing: routerReducer
	})

export default rootReducer