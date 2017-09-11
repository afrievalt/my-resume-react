import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import AppBar from 'material-ui/AppBar'

import { selectEmploymentDetails } from '../ducks/select-employment-details'

const style = {
  icon : {
    fontSize: "2em",
    paddingTop: 5,
    color: "white"
  },
  avatar: {
    width: 'auto',
    height: 'auto',
    borderRadius: 0
  },
  textStyle: {
    paddingLeft: 50
  },
  cardTitle: {
    fontSize: ".75em",
    marginBottom: -25
  }
}
export class Content extends Component {
  render() {
    const avatar = this.getAvatar()
    return (
      <div>
        <div>
          <AppBar title="Details" iconElementLeft={this.getClose()}/>
          <Card>
            <CardHeader
              title={this.props.title}
              subtitle={this.props.subtitle}
              textStyle={style.textStyle}
              avatar={avatar}              
            />
            <CardText>
              {this.props.description}
            </CardText>
            <CardTitle title="skills" style={style.cardTitle}/>
            <CardText>
              {this.props.skills}
            </CardText>
          </Card>
        </div>
      </div>
    )
  }
  getAvatar = () => (<Avatar src={this.props.img} style={style.avatar}/>) 
  getClose = () => (
    <Link to={'/'}><i style={style.icon} className="fa fa-arrow-circle-left appbar__back"/></Link>
  ) 
}

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps.match.params //id from router https://very-new.firebaseapp.com/details/dc => id= dc
  return {
    ...selectEmploymentDetails(state, id)
  }
}

export const DetailsSection = connect(mapStateToProps)(Content)

export default DetailsSection
