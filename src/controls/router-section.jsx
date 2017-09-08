import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {DetailsSection} from './details-section'
import {Home} from './home'
import { handleLoadEmploymentHistory } from '../ducks/employment-history.duck'


export class RouterContent extends Component {  
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route component={DetailsSection} path="/details/:id"/>
            <Route component={Home} path="/"/>              
          </Switch>
        </BrowserRouter>          
    )    
  } 
  componentWillMount() {
    this.props.handleLoadEmploymentHistory()
  } 
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoadEmploymentHistory: () => dispatch(handleLoadEmploymentHistory())
  }
}

export const RouterSection = connect(mapStateToProps, mapDispatchToProps)(RouterContent)

export default RouterSection
