
import {
    makeStyles
} from '@material-ui/core';

const box = {
    width: '100%',
    padding: '7px',
    borderRadius: '4px',
    fontSize: "14px"
}

export const useStyles = makeStyles(theme => ({
    success: {
        backgroundColor: theme.color.success,
        ...box
    },
    error: {
        backgroundColor: theme.color.error,
        ...box
    },
    center: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    innerCenter: {
        width: "50%",
        borderRadius: "10px",
        padding: "10px",
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.largeTablet]: {
            width: "90%",
        }
    },
    belowDivIcon: {
        position: 'absolute',
        bottom: '0px',
        right: '0px',
    }
}));