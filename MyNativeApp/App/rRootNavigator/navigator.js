import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../component/home';
import Login from '../component/login';

const MainNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  Home: {screen: Home},
});

const RootNavigator = createAppContainer(MainNavigator);

export default RootNavigator;