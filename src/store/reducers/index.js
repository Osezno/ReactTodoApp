import { combineReducers } from 'redux';
import { CLEARSTORE } from 'store/actions/types';


import session from './session';
import toast from './toast';


const appReducer = combineReducers({
  sessionState: session,
  toastState:toast
});

const rootReducer = (state, action) => {

  if (action.type === CLEARSTORE) {
    state = { sessionState: { authUser: { id_estatus: null, id_rol: null, username: null } } };
  }

  return appReducer(state, action);
};

export default rootReducer
