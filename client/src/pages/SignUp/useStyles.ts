import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    justifyContent: 'center',
    marginTop: '10vh',
    marginBottom: '10vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: '10vh',
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 900,
    textAlign: 'center',
    '&.MuiTypography-root': {
      fontWeight: 900,
    },
  },
}));

export default useStyles;
