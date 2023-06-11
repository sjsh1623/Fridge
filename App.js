import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './src/features/auth/screens/Login';
import AuthMainScreen from './src/features/auth/screens/Login'

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login" component={LoginScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
