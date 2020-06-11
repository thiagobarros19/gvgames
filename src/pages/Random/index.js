import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import Dupla from '../../components/Dupla';

import useStyles from './styles';

function Random() {

  const classes = useStyles();
  let users = useSelector(state => state.users.users);
  const [usersRandom, setUsersRandom] = useState([]);

  function handleRandomUsers(users){
    setUsersRandom([]);
    let tempArray = [];

    while (users.length){
      let index = Math.floor(Math.random() * users.length);
      tempArray.push(users[index]);
      users.splice(index, 1);
    }

    setUsersRandom(tempArray);
  }

  useEffect(() => {

    var arr = Object.keys(users).map(function(key) {
      return users[key];
    });

    handleRandomUsers(arr);
    
  },[users])

  return (
    <div className={classes.container}>
      <div className={classes.buttonContainer}>
        <Link style={{textDecoration: 'none'}} to="/">
          <Button className={classes.button} variant="outlined">Inicio</Button>
        </Link>
      </div>
      {new Array(usersRandom.length/2).fill(null).map((u, i) => i * 2).map((index)=>{
        return(<Dupla meliante1={usersRandom[index]} meliante2={usersRandom[index+1]} />)
      })}
      <div className={classes.buttonContainer}>
        <Button className={classes.button} onClick={() => handleRandomUsers(usersRandom)} variant="outlined">Sortear</Button>
      </div>
    </div>
  );
}

export default Random;