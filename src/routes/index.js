import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Teste2 from "../screens/Teste2";

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName='SignIn'>
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
                name='Teste2'
                component={Teste2}
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