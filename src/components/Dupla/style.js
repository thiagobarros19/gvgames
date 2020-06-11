import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  item:{
    width: '40%',
    height: '40%',
    border: '2px solid #fff',
    borderRadius: '15px',
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  name:{
    fontSize: 50
  }
}))

export default styles;  