import React, {Component} from 'react';
import RootNavigator from './App/rRootNavigator/navigator';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './App/reducers';

class App extends Component {
  render() {
    return <Provider store = {store}>
              <RootNavigator />
          </Provider>
  }
}
const store = createStore(reducers)
export default App;