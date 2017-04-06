/* eslint-disable */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers/index'
import App from './App'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

//React Components
import NotFoundPage from './comp/NotFoundPage'
import TimeSeriesContainer from './comp/timeseries/TimeSeriesContainer'
import TestDashboard from './comp/TestDashboard'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const history = syncHistoryWithStore(browserHistory, store);

//hot reload reducer
if(module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    })
}

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={TestDashboard} />

                <Route path="*" component={NotFoundPage} />
            </Route>
        </Router>
    </Provider >,
    document.getElementById("app")
)