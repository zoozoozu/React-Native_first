import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import CheckLogin from '~/Screens/CheckLogin';
import Login from '~/Screens/Login';
import Home from '~/Screens/Home';
//import MovieDetail from '~/Screens/MovieDetail';

const LoginNavigator = createStackNavigator({
    Login,
});

//MainNavigator
const HomeNavigator = createStackNavigator({
    Home,
    //MovieDetail,
});

const AppNavigator = createSwitchNavigator(
    {
        HomeNavigator,
        CheckLogin,
        LoginNavigator,
        
    },

    {
        initialRouteName: 'HomeNavigator',
    }
);

export default createAppContainer(AppNavigator);