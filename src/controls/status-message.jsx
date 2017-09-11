import React, {Component} from 'react'
import {connect} from 'react-redux'

const style = {  
  wrapper: {
    backgroundColor: "#e9ebeb",
    display: "block",
    position: "absolute",
    top: 0,
    bottom: 0, 
    left: -80,
    right: 0,
    zIndex: 100
  },
  h2: {
    marginLeft: 100,
    marginTop: 90
  },
  error: {
    color: "red"
  },
  hide: {
    display: 'none'
  }
}

export class StatusMessageContent extends Component {
  render() {
    return (
      <div style={this.props.wrapperStyle}>
        <h2 style={this.props.h2style}>
          {this.props.message}
        </h2>
        <img
          alt="loading spinner"
          style={this.props.imgStyle}
          src="https://i1.wp.com/hypebeast.com/image/2017/05/finger-spinner-fidget-spinner-ios-app-00.gif?fit=516,344\u0026strip=all"/>
      </div>
    )
  }
}

const messageMap = {
  none: {
    wrapperStyle: style.hide
  },
  loading: {
    message: "Loading...",
    h2style: style.h2,
    imgStyle: {},
    wrapperStyle: style.wrapper
  },
  error: {
    message: "Unable to load data",
    h2style: {...style.h2, ...style.error},
    imgStyle: style.hide,
    wrapperStyle: style.wrapper
  }
}
const mapStateToProps = (state) => {
  return messageMap[state.status]
}

export const StatusMessage = connect(mapStateToProps)(StatusMessageContent)