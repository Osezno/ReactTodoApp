import { SET_AUTH_USER } from '../actions/types';
import { updateObject } from "../utility";


const INITIAL_STATE = { 
    authUser: {id_estatus: null, id_rol: null, username: null}
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_AUTH_USER: {
            return updateObject(state, { authUser: action.payload, error: null });
        }
        default:
            return state;
    }
}

export default reducer;
