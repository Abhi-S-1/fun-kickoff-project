import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    justifyContent: 'center',
    paddingTop: '10vh',
    paddingBottom: '10vh',
    backgroundColor: '#fafafb',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: '6vh',
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    textAlign: 'center',
    '&.MuiTypography-root': {
      fontWeight: 900,
    },
  },
}));

export default useStyles;
