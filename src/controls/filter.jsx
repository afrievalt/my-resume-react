import React, { Component } from 'react'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField'

import {handleChangeFilter} from '../ducks/filter.duck'

const style = {
  textField: {
    marginLeft: 15
  }
}

export class FilterContent extends Component {
  render() {
    return (
      <TextField 
        floatingLabelText="Filter"
        value={this.props.value}
        onChange={this.props.handleChangeFilter}
        style={style.textField} 
        autoFocus
      />
    )
  }
}
const mapStateToProps = (state) => {
  return {
    value: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeFilter: (target, payload) => dispatch(handleChangeFilter(payload)),
    
  }
}

export const Filter = connect(mapStateToProps, mapDispatchToProps)(FilterContent)
