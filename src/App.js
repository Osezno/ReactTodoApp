
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Preloader from 'components/Utils/Preloader';
import * as ACTIONS from 'store/actions';
import { Snackbar } from '@material-ui/core'
import Catalogs from 'constants/catalogs';

import Home from 'containers/Home';

import { useStyles } from './App.styles';
const { vertical, horizontal, } = Catalogs

const App = (props) => {
  const { authUser, fetchAuthUser, toast, removeToast } = props;
  const css = useStyles();
  const [open, setOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState({});

  const handleCloseToast = () => {
    setOpen(false)
    removeToast()
  };

  const openToast = (message, success) => {
    setToastMessage(message)
    if (success) setToastType(css.success)
    else setToastType(css.error)
    setOpen(true)
  }

  useEffect(() => {
    if (toast?.open) openToast(toast.message, toast.success);
    else setOpen(false);
  }, [toast])

  useEffect(() => {
    fetchAuthUser();
  }, [fetchAuthUser])

  return (
    <>
      {authUser ? <Home authUser={authUser} /> : <Preloader />}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={3000}
        onClose={handleCloseToast}
        message={
          <div className={toastType}>
            {toastMessage}
          </div>
        }
        key={vertical + horizontal}
      />
    </>
  );
}


const mapStateToProps = state => {
  return {
    authUser: state.sessionState.authUser,
    toast: state.toastState,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAuthUser: () => dispatch(ACTIONS.fetchAuthUser()),
    removeToast: () => dispatch(ACTIONS.removeToast()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

