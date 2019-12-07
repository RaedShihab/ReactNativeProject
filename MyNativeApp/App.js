import React, {Component} from 'react';
import RootNavigator from './App/rRootNavigator/navigator';
import reducers from './App/reducers';

import {Provider,} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from  'redux-thunk';


class App extends Component {
  render() {
    return <Provider store = {store}>
              <RootNavigator />
          </Provider>
  }
}
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

export default App;