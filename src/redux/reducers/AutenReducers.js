import { LOGIN, LOGOUT } from '../actions/autentication.js';

const initialState ={
    logged: false,
    Nombre:"",
}

const autenticacion = (state=initialState, action) =>{
    switch(action.type){

        case LOGIN:
            return{
                ...state,
                ...action.payload,
            };
            case LOGOUT:
                return{
                    ...state,
                    ...action.payload,
                };

        default:

            return state;
    }
}
export default autenticacion;