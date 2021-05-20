import { SET_AUTH_USER } from './types';
import { CLEARSTORE } from './types';

export const setAuthUser = user => {
    return {
        type: SET_AUTH_USER,
        payload: user
    }
}



export const clearStore = () => {
    return {
        type: CLEARSTORE,
    }
}


export const fetchAuthUser = () => async dispatch => {
    if (localStorage.length) {
        let session = {}
        session['id_estatus'] = localStorage.getItem('id_estatus');
        session['id_rol'] = localStorage.getItem('id_rol');
        session['username'] = localStorage.getItem('username');
        dispatch(setAuthUser(session));
    }
}


export const signIn = (session) => async dispatch => {
    localStorage.setItem('id_estatus', session.id_estatus);
    localStorage.setItem('id_rol', session.id_rol);
    localStorage.setItem('username', session.username);
    dispatch(setAuthUser(session));
}


export const signOut = () => async dispatch => {
    localStorage.clear();
    dispatch(clearStore());
}
