import {createStore, combineReducers} from 'redux';
import autenticacion from './reducers/AutenReducer.js';
import PPDAReducer from './reducers/PPDAReducer.js';
import MedidaReducer from './reducers/MedidaReducer.js';

const appReducer = combineReducers({
    autenticacion: autenticacion,
    PPDAReducer: PPDAReducer,
    MedidaReducer :MedidaReducer,
})
export default createStore(appReducer);