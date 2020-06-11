import React from 'react';
import { Outlet } from 'react-router-dom';

import useStyles from './styles'

import background from '../../assets/bg.png';

function Deitar() {

  const classes = useStyles();

  return (
    <div className={classes.background} style={{backgroundImage: `url(${background})`}}>
      <div className={classes.containerShadow}>
        <Outlet />
      </div>
    </div>
  );
}

export default Deitar;