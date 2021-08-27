import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        grow: 1,
        marginTop: 50,
        marginBottom: 30,
    },
    card: {
        border: '3px solid #bea925',
        // color: '#fff',
        backgroundColor: theme.palette.primary.main,
        transition: "transform 0.5s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        cursor: 'pointer',
    },
    button: {
        marginBottom: 10,
        alignItem: 'center',
        justifySelf: 'center',
        color: theme.palette.primary.main,
        '&:hover': {
            fontstyle: 'italic',
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            transition: "transform 0.5s ease-in-out",
            "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        }
    }
}));