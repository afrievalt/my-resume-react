import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'

import {EmploymentHistory} from './employment-history'
import {Filter} from './filter'
import {Sort} from './sort'

export class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <AppBar title="Employment History" showMenuIconButton={false}/>
          <Sort/>
          <Filter/>
          <EmploymentHistory/>
        </div>
      </div>
    )
  }
}
