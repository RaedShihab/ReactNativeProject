import React, {Component} from 'react';
import RootNavigator from './App/rRootNavigator/navigator';
import reducers from './App/reducers';

import {Provider,} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from  'redux-thunk';
import * as firebase from 'firebase';

class App extends Component {
  // componentWillMount() {
  //   var config = {
  //     apiKey: "<API_KEY>",
  //     authDomain: "<PROJECT_ID>.firebaseapp.com",
  //     databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  //     projectId: "<PROJECT_ID>",
  //     storageBucket: "<BUCKET>.appspot.com",
  //     messagingSenderId: "<SENDER_ID>",
  //   };
  //   firebase.initializeApp(config);
  //   console.log('firebase',firebase)
  // }
  render() {
    return <Provider store = {store}>
              <RootNavigator />
          </Provider>
  }
}
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

export default App;