import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer1 from './reducers'

const store = createStore(reducer1, applyMiddleware(thunk))

export default store