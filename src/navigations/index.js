import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {Text} from 'react-native';
import AuthNavigator from './AuthNavigator';

const AppNavContainer =()=>{
 return(
    <NavigationContainer>
     <AuthNavigator/>
    </NavigationContainer>
    )
}
export default AppNavContainer;