export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (nombre) =>{
    return{
        type: LOGIN,
        payload: {
            logged: true,
            Nombre: nombre,

        },
    }
}

export const logout = () =>{
    return{
        type: LOGOUT,
        payload: {
            logged: false,
            Nombre:"",
        },
    }
}