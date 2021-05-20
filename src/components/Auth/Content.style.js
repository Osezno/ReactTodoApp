import { makeStyles } from '@material-ui/styles';



const centeredBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}


const ContentStyle = makeStyles(theme => ({
    menu: {
        backgroundColor: theme.color.secondary
    },
    pageTitle:{
        marginBottom:"10px"
    },
    container: {
        width: "100vw",
        height: "100vh",
        ...theme.grids.dashboardGrid,
        background: `linear-gradient(90deg,${theme.color.primary} 0%, ${theme.color.secondary} 100%)`
    },
    wrapper: {
        overflow: 'auto',
        height: "calc(100vh - 60px)",
        padding: "15px"
    },




}))

export default ContentStyle