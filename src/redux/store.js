import {createStore, combineReducers} from 'redux';
import autenticacion from './reducers/AutenReducers.js';
import proyect_reducer from './reducers/save_proyect_reducer.js';

const appReducer = combineReducers({
    autenticacion: autenticacion,
    proyect_reducer: proyect_reducer
})
export default createStore(appReducer);