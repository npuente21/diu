import { ACTION_UPDATE } from "../actions/save_proyect";

const initialState ={

    Titulo:"",
    Descripcion:"",
    video:"",
    facebook:"",
    twitter:"",
    instagram:"",
    website: "",
}

const proyect_reducer = (state = initialState, action) =>{
    switch(action.type){
        case ACTION_UPDATE:
            return{
                ...state,
                ...action.payload,
            };
            default:
                return state; 
    }
}
export default proyect_reducer;