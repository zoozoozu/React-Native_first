import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import CheckLogin from '~/Screens/CheckLogin';
import Login from '~/Screens/Login';
//import MovieHome from '~/Screens/MovieHome';
//import MovieDetail from '~/Screens/MovieDetail';

const LoginNavigator = createStackNavigator({
    Login,
});

//MainNavigator
const MovieNavigator = createStackNavigator({
    Login
    //MovieHome,
    //MovieDetail,
});

const AppNavigator = createSwitchNavigator(
    {
        CheckLogin,
        LoginNavigator,
        MovieNavigator,
    },

    {
        initialRouteName: 'CheckLogin',
    }
);

export default createAppContainer(AppNavigator);