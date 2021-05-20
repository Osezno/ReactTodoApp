import React from 'react';
import Layout from 'components/Layout/Index'
import Todo from './Todo/Todo'
import userContext from 'context/userContext';

const Home = props => {
    const { authUser } = props
    return (
        <userContext.Provider value={authUser.username}>
            <Layout body={<Todo/>} />
        </userContext.Provider>
    );
}


export default Home;
