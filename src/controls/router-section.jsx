import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import {DetailsSection} from './details-section'
import {Home} from './home'
import {StatusMessage} from './status-message'
import {handleLoadEmploymentHistory} from '../ducks/employment-history.duck'

export class RouterContent extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route component={DetailsSection} path="/details/:id"/>
          <Route component={StatusMessage} path="/"/>
          <Route component={Home} path="/" exact/>          
        </div>
      </BrowserRouter>
    )
  }
  componentWillMount() {
    this
      .props
      .handleLoadEmploymentHistory()
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoadEmploymentHistory: () => dispatch(handleLoadEmploymentHistory())
  }
}

export const RouterSection = connect(mapStateToProps, mapDispatchToProps)(RouterContent)

export default RouterSection
