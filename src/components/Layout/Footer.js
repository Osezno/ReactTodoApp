import React from 'react';
import LayoutStyle from './Layout.style'

import colors from 'constants/colors';
import catalogs from 'constants/catalogs';
import Text from 'components/Text/Text'

const useStyles = LayoutStyle

const Footer = props => {
  
    const classes = useStyles();
  



    return (
        <div className={classes.footer}>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <Text color={colors.lightest} type="small">
             {catalogs.pageInfo.footerMessage}
            </Text>
        </div>
    );
}

export default Footer;