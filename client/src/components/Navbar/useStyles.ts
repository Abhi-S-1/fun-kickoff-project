import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  image: {
    alignSelf: 'flex-start',
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
