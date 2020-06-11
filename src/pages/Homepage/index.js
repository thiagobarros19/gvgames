import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import useStyles from './styles'

import logo from '../../assets/logogv.png'

import Select from '../../components/Select'

function Homepage() {

  const [meliantes, setMeliantes] = useState(0);
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const handleSelect = (value) => {
    let users = value.target.value
    if(users === 12) users = 4
    setMeliantes(users);
  }

  const handleQtdUsers = (values) => {
    if(meliantes>0){
      navigate(`/list/${meliantes}`)
    }
  }

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src={logo} alt="Logo GV" className={classes.logo} />
      <form onSubmit={handleSubmit(handleQtdUsers)} className={classes.players}>
        <Select handleSelect={handleSelect} meliantes={meliantes} register={register} />
        <Button type="submit" className={classes.button} variant="outlined">Deita Negão</Button>
      </form>
    </div>
  );
}

export default Homepage;