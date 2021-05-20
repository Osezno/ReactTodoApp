import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useStyles } from './Account.styles';
import catalogs from 'constants/catalogs';


import * as ACTIONS from 'store/actions';
import { Card } from '@material-ui/core'
//componentes
import Info from './accountComponents/Info';
import View from './accountComponents/View';
import SignInForm from 'components/Forms/SignInForm';

const SignIn = (props) => {
    const { signIn, addToast } = props
    const { pageInfo } = catalogs
    const classes = useStyles();

    const addAuthUser = (session) => {
        signIn(session)
    }

    return (
        <>
            <Card className={classes.signInRoot}>
                <View className={classes.cover} cover={pageInfo.cover} />
                <div className={classes.content}>
                    <Info title={pageInfo.nombre.toUpperCase()} highlight={pageInfo.slogan} message={pageInfo.welcomeMessage} />
                    <SignInForm addAuthUser={(session) => addAuthUser(session)} addToast={(toast) => addToast(toast)} />
                </div>
            </Card>
        </>
    )
}



const mapDispatchToProps = dispatch => {
    return {
        signIn: (session) => dispatch(ACTIONS.signIn(session)),
        addToast: (toast) => dispatch(ACTIONS.addToast(toast))
    }
}

export default compose(connect(null, mapDispatchToProps))(SignIn);