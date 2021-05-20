import {
    makeStyles
} from '@material-ui/core';

const box = {
    width: '100%',
    padding: '7px',
    borderRadius: '4px'
}


export const useStyles = makeStyles(theme => ({
    ...theme.animations,
    tableWrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        minHeight: "30vh",
        maxHeight: "60vh",
       
    },
    task: {
        ...theme.grids.twoColumnGrid,
        
        borderBottom: `solid ${theme.color.contrastLight} 1px`
    },
    taskInfo: {
        display: "flex",
        flexDirection: "column",
        alignItems: "baseline",
        justifyContent: "center",
        padding: "5px",
    },
    taskActions: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "10px",
        animation: `$fadeLeft ease-in  1s `,
    },
    
    success: {
        backgroundColor: theme.color.success,
        ...box
    },
    error: {
        backgroundColor: theme.color.error,
        ...box
    }
}));