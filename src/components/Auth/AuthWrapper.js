import React from 'react'
import Text from 'components/Text/Text'
import ContentStyle from './Content.style'
import colors from 'constants/colors';

const useStyles = ContentStyle

const AuthWrapper = props => {
    const css = useStyles();
    const { content, title, message } = props

    
        return(
            <div className={css.container}>
                <div className={css.wrapper}>
                    <Text color={colors.white} type="subtitle" >
                        {title}
                    </Text>
                    <Text color={colors.dark} type="paragraph" style={{ marginBottom: 10 }}>
                        {message}
                    </Text>

                    {content}
                </div>
            </div>
        );
}

export default AuthWrapper;