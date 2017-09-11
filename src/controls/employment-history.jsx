import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

import {getEmploymentHistoryList} from '../ducks/select-employment-history'

const style = {
  avatar: {
    width: 64,
    height: 'auto',
    maxHeight: 64,
    borderRadius: 0
  },
  innerDivStyle: {
    paddingLeft: 88
  }
}
export class Content extends Component {
  render() {
    const listItems = this.getListItems()
    return (
      <List>
        {listItems}
      </List>
    )
  }
  getAvatar = src => (<Avatar src={src} style={style.avatar}/>)
  getLink = key => (<Link to={"/details/" + key}/>)
  getListItems = () => {
    const icon = (<i className="fa fa-chevron-right"/>)
    const mapListItem = (li, i) => (<ListItem
      key={li.key}
      leftAvatar={this.getAvatar(li.img)}
      rightIcon={icon}
      primaryText={li.primaryText}
      secondaryText={li.secondaryText}
      containerElement={this.getLink(li.key)}
      innerDivStyle={style.innerDivStyle}/>)
    return this
      .props
      .rows
      .map(mapListItem)
  }
}

const mapStateToProps = (state) => {
  return {rows: getEmploymentHistoryList(state)}
}

export const EmploymentHistory = connect(mapStateToProps)(Content)
