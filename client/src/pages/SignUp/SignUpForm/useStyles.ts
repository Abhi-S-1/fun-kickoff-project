import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    fontSize: 19,
    paddingLeft: '5px',
    textTransform: 'uppercase',
    '&.MuiInputLabel-root': {
      fontSize: 12,
      fontWeight: 'bold',
      color: 'rgb(0,0,0)',
    },
  },
  inputs: {
    marginTop: '1rem',
    height: '2rem',
    padding: '5px',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    backgroundColor: '#3a8dff',
    fontWeight: 'bold',
    '&.MuiButton-root': {
      backgroundColor: '#f14140',
    },
  },
}));

export default useStyles;
