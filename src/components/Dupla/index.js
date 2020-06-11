import React from 'react';

import useStyle from './style';

function Dupla({ meliante1, meliante2 }) {

  const classes = useStyle();

  return (
    <div className={classes.item}>
      <span className={classes.name}>{meliante1.toUpperCase()}</span>
      <span className={classes.name}>{meliante2.toUpperCase()}</span>
    </div>
  );
}

export default Dupla;