import React from 'react';

//content
import LayoutStyle from './Layout.style'
import Header from './Header'
import Footer from './Footer'

const useStyles = LayoutStyle

const Index = props => {
    const { body } = props
    const css = useStyles();

    return (
        <div className={css.root}>
            <Header />
            {body}
            <Footer />
        </div>
    );
}


export default Index;
