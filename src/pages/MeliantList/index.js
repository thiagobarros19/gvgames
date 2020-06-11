import React from 'react';
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';

import useStyles from './styles'

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff',
      },
      '&:hover fieldset': {
        borderColor: '#707070',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#707070',
      },
    },
  },
})(TextField);

function MeliantList() {

  const { handleSubmit, register } = useForm();
  const { value } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleUsers = (values) => {
    dispatch({ type: 'ADD_USERS', users: values })
    navigate('/random');
  }

  return (
    <form onSubmit={handleSubmit(handleUsers)} className={classes.container}>
      {new Array(parseInt(value)).fill(null).map((u, i) => i + 1).map((index)=>{
        return(
          <CssTextField 
            className={classes.input} 
            inputRef={register({required: 'Campo Obrigatório'})}
            InputLabelProps={{style:{color: '#fff',}}} 
            InputProps={{style:{color: '#fff',}}} 
            id={index} 
            name={index}
            label={`Meliante ${index}`} 
            variant="outlined" 
            autoComplete="off"
          />
        )
      })}

      <Button type="submit" className={classes.button} variant="outlined">Sortear</Button>
    </form>
  );
}

export default MeliantList;