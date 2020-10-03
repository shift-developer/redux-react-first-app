import React, {Component} from 'react';
import {connect} from 'react-redux'
import Page from './page';

class Results extends Component {
  render() {
    return(
      <Page />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    suggestions: state.suggestions
  }
} //este estado viene de los reducers

export default connect(mapStateToProps)(Results);

/*
index.js es el componente contenedor y tine la lógica
page.js es el componente presentacional con toda la UI
 */