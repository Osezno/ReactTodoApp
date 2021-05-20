import React, { useState } from 'react';
import LayoutStyle from './Layout.style'
import Logo from './Logo'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import catalogs from 'constants/catalogs';
import { connect } from 'react-redux';
import * as ACTIONS from 'store/actions';

const useStyles = LayoutStyle

const { success, toast } = catalogs


const Header = props => {

    const css = useStyles();
    const { signOut, addToast, authUser } = props
    const { username } = authUser;

    const [anchorEl, setAnchorEl] = useState(null);


    //GENERAL FUNCTIONS  
    const handleClose = () => {
        setAnchorEl(null);
    };

    // MAIN FUNCTIONS
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };



    const handleLogout = () => {
        handleClose()
        signOut()
        toast['message'] = success.logout
        toast['success'] = true
        addToast(toast)
    }



    const rigthWrap = <div className={css.logout}>
        {username}
        <IconButton
            aria-label="vér mas"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
        >
            <MoreVertIcon />
        </IconButton>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
    </div>;

    return (
        <div className={css.header}>
            <Logo color />
            {username ? rigthWrap : null}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        authUser: state.sessionState.authUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(ACTIONS.signOut()),
        addToast: (toast) => dispatch(ACTIONS.addToast(toast))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);