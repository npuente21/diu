import {createStore, combineReducers} from 'redux';
import autenticacion from './reducers/AutenReducers.js';

const appReducer = combineReducers({
    autenticacion: autenticacion,
})
export default createStore(appReducer);