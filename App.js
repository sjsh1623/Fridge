import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SigninScreen from 'auth/screens/Signin';
import SignupScreen from "auth/screens/Signup";
import EmailVerificationScreen from "auth/screens/EmailVerification";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Login" component={SigninScreen}/>
                <Stack.Screen name="Signin" component={SignupScreen}/>
                <Stack.Screen name="EmailVerification" component={EmailVerificationScreen} options={{
                    presentation: 'modal',
                    animationTypeForReplace: 'push',
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
