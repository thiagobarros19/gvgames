import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

import useStyles from './styles';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(2),
    },
  },
  input: {
    position: 'relative',
    // backgroundColor: theme.palette.background.paper,
    borderBottom: '1px solid #fff',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    '&:focus': {
      borderColor: '#707070',
    },
    '&:hover': {
      borderBottom: '1px solid #707070',
    }
  },
}))(InputBase);

function SelectForm({ handleSelect, meliantes, register }) {

  const classes = useStyles();

  console.log(meliantes)

  return (
    <FormControl 
      className={classes.margin} 
    >
      <InputLabel className={classes.inputPlaceHolder} id="demo-customized-select-label">Qtd de meliantes</InputLabel>
      <Select
        className={classes.inputValue}
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        inputRef={register({required: 'Campo Obrigatório'})}
        name="qtdUsers"
        // value={meliantes}
        onChange={handleSelect}
        input={<BootstrapInput />}
      >
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={12}>12 a 15?</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectForm;