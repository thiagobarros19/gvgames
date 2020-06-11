import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  background: {
    width: '100vw',
    height: '100vh',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  containerShadow: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(90deg, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.97) 100%)',
    color: '#fff'
  },
}))

export default styles;  