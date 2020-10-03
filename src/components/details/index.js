import React, {Component} from 'react';
import {connect} from 'react-redux'
import Page from './page';

class Details extends Component {
  render() {
    return(
      <Page />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.currentItem
  }
} //este estado viene de los reducers

export default connect(mapStateToProps)(Details);