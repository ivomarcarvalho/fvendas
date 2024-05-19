import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()

import Preload from '../screens/Preload';
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Home from "../screens/Home";
import Welcome from "../screens/Welcome";

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName='Preload'>
            <Stack.Screen
                name='Preload'
                component={Preload}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='SignIn'
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='SignUp'
                component={SignUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default Routes;