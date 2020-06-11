import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from '../../images/background-login.png'; // Import using relative path
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom' 
import { useForm } from "react-hook-form";
import firebase from '../../firebase'
import { useNavigate } from 'react-router-dom';
import PassWord from '../../components/field/Password'
import config from 'react-global-configuration';
import ImageLogo from '../../images/logouni.svg'
import classnames from "classnames";
import {
  isBrowser,
} from "react-device-detect";

function Login() {

  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const url = useSelector(state => state.unit.url)
  const [logo, setLogo] = useState(ImageLogo);
  const unit = config.get('unit');

  useEffect(() => {
    const data = firebase.database().ref(`empresa/${unit}/perfil/logotipo`)

    data.on('value', snap => {
      setLogo(snap.val())
    })

  }, [unit]);

  
  
  const handleLogin = async values => {
    const { email, password } = values;
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
        navigate(url);
        dispatch({ type: 'ADD_URL', url: '/' })
    } catch (error) {
      alert(error);
    }
  };


  return (
    <Box display="flex" className={classes.root} flexDirection="column" alignItems="center" justifyContent="flex-start">
       <Box>
         <img className={classnames(classes.logo, {
                      [classes.logoBrowser]: isBrowser
                    })} alt="logo" src={logo} />
       </Box>
      <Box className={classes.container}> 
      <form onSubmit={handleSubmit(handleLogin)} className={classes.container}>
         
          <TextField  style={{'marginTop':"10%"}}  label="E-mail" variant="outlined"   className={classes.textField}
            name="email"
            inputRef={register({
              required: 'Campo Obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Formato de e-mail inválido"
              }
            })}
            
          />
           <Box className={classes.errorBox}><Typography className={classes.errorText}>{errors.email && errors.email.message}</Typography></Box>
           <PassWord  label={'Senha'} register={register} size={'medium'} className={classes.textPassword}
                                    name='password' errors={errors}  />
         
                                    
          <Box className={classes.errorBox}><Typography className={classes.errorText}>{errors.password && errors.password.message}</Typography></Box>
          <Button variant="contained" type="submit" color="primary"  size="large"   className={classes.button}>
              <Typography className={classes.text}>Entrar</Typography>
          </Button>
        </form>
        <Typography className={classes.link} >
            <Link to="/register" style={{'textDecoration': 'none'}}>
                ou Cadastre-se
            </Link>
        </Typography>
      </Box>
    </Box>
  );
}



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
  },
  container: {
    display:'flex',
    backgroundColor: '#fff',
    width: '90vw',
    maxWidth: '400px',
    maxHeight: '380px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    height: 'auto',
    borderRadius: 4,
    boxShadow: 3,
  },
  textField:{
    margin: theme.spacing(1),
    width: '90%',
    backgroundColor: '#f2f2f2',
  },
  textPassword:{
    backgroundColor: '#f2f2f2',
  
  },
  button: {
    marginTop: theme.spacing(3),
    width: '90%',
    backgroundColor: '#b42222',
    fontSize: 16,
  },
  text:{
    fontWeight: 600,
  },
  link:{
    fontSize: 20,
    color: "#296d98",
    fontWeight: 800,
    marginTop: theme.spacing(5),
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginBottom: '5%',
    '&onFocus': {
        color: '#000',
    },
  },
  errorBox:{
    display:"flex",
    justifyContent:"flex-start",
    flexGrow: 1,
    width: "90%"
  },
  errorText:{
    color:'#b42222',
    fontSize: '16px'
  },
  logo: {
    width: '100px',
    marginBottom:"20px",
    marginTop:"15vh"
  },
  logoBrowser:{
    width: '100px',
    marginBottom:"20px",
    marginTop:"22vh"
  }
}));


export default Login;