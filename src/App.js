import React, {Component} from 'react'
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import {store} from './store'
import {RouterSection} from './controls/router-section'

injectTapEventPlugin()

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>          
          <RouterSection />
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App