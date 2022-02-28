import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const AuthNavigator =()=>{
    const AuthStack = createNativeStackNavigator();
 return(
     <AuthStack.Navigator>
     <AuthStack.Screen name='Login' component={LoginScreen}></AuthStack.Screen>
     <AuthStack.Screen name='Home' component={HomeScreen}></AuthStack.Screen>
     </AuthStack.Navigator>
 )
}
export default AuthNavigator;