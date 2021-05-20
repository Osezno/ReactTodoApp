import React from 'react';

import SignIn from 'containers/Account/SignIn';
import AuthWrapper from './AuthWrapper';
import userContext from 'context/userContext';

const Index = Component => props => {
    return (
        <userContext.Consumer>
            {username => !username ? <SignIn /> :
               < AuthWrapper
                    title={"Bienvenido " + username.replace(/@.*$/,"")}
                    message={"Organiza de forma fácil y rápida tus pendientes"}
                    content={<Component  />}
                      /> }
        </userContext.Consumer>
    );
}
// subtitle with task pending and task acomplished
export default Index;