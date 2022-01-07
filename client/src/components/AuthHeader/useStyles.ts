import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  authHeader: {
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '2vh',
    marginLeft: '3rem',
  },
  accAside: {
    fontSize: 10,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
  },
  accBtn: {
    borderRadius: theme.shape.borderRadius,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    boxShadow: 'none',
    '&.MuiButton-root': {
      paddingLeft: 0,
      color: '#f14140',
      textDecoration: 'underline',
      textTransform: 'capitalize',
    },
  },
}));

export default useStyles;
