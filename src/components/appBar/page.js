import React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CodeIcon from '@material-ui/icons/Code';
import AutoComplete from '../autocomplete/';
import './styles.css';

const Page = (props) => {
  const {
    text,
    suggestions,
    onChangeText,
    onChangeSelection
  } = props;
  return(
    <AppBar position="static">
      <Toolbar className="appBar">
        <Typography variant="h6" color="inherit">
          <CodeIcon/>
        </Typography>
        <AutoComplete 
          text={text} 
          suggestions={suggestions}
          onChangeText={onChangeText}
          onChangeSelection={onChangeSelection}/>
        <AccountCircleIcon />
      </Toolbar>
    </AppBar>
  )
}

export default Page;