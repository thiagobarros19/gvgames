import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  container:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50,
    width: '70%',
    height: '80%',
  },
  logo: {
    width: 'auto',
    height: '40%',
  },
  players: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '25px 0',
  },
  button: {
    borderColor: '#fff',
    color: '#fff',
    margin: '25px 0',
    '&:hover': {
      borderColor: '#707070',
    }
  },
  link: {
    textDecoration: 'none'
  }
}))

export default styles;  