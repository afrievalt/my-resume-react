import React, {Component} from 'react'
import {connect} from 'react-redux'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import {handleChangeSort} from '../ducks/sort.duck'

const style = {
  wrapper: {
    margin: 15,
    display: "block"
  }
}

export class SortContent extends Component {
  render() {
    return (
      <div style={style.wrapper}>
        <SelectField
          floatingLabelText="Sort By"
          value={this.props.value}
          onChange={this.props.handleChangeSort}
        >
          <MenuItem value='endDate' primaryText="End Date"/>
          <MenuItem value='name' primaryText="Company"/>
          <MenuItem value='title' primaryText="Title"/>
        </SelectField>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {value: state.sortBy}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeSort: (target, i, payload) => dispatch(handleChangeSort(payload))
  }
}

export const Sort = connect(mapStateToProps, mapDispatchToProps)(SortContent)
