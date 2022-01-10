import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white',
    // '&.MuiPaper-root': {
    //   color: 'white',
    // },
  },
  baritems: {
    textTransform: 'capitalize',
    color: 'black',
  },
  userMenu: {
    color: 'light-grey',
  },
}));

export default useStyles;
