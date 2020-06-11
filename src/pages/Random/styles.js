import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  container:{
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 50,
    width: '70%',
    height: '80%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  button: {
    borderColor: '#fff',
    color: '#fff',
    '&:hover': {
      borderColor: '#707070',
    },
  },
}))

export default styles;  