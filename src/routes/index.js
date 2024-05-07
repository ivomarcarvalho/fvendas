import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import Login from '../pages/Login';
import Config from "../pages/Config";
import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";

const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}

            />


            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{ headerShown: false }}

            />

            <Stack.Screen
                name='Config'
                component={Config}
                options={{ headerShown: false }}

            />


            <Stack.Screen
                name='SignIn'
                component={SignIn}
                options={{ headerShown: false }}

            />
        </Stack.Navigator>
    )
}

export default Routes;