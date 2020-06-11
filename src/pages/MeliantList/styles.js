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
  input: {
    width: 350,
    margin: '5px 0',
    color: '#fff !important'
  },
  button: {
    borderColor: '#fff',
    color: '#fff',
    '&:hover': {
      borderColor: '#707070',
    },
    margin: '25px 0'
  }
}))

export default styles;  