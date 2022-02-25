import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
const Login = ()=>{
    return(
        <View>
        <Text>
            Hi I am Inside Login
        </Text>
        </View>
    );
};

const SignUp = ()=>{
    return(
        <View>
        <Text>
            Hi I am Inside ContactDetail
        </Text>
        </View>
    );
};

const AuthNavigator =()=>{
    const AuthStack = createStackNavigator();
 return(
     <AuthStack.Navigator>
     <AuthStack.Screen name='Login' component={Login}></AuthStack.Screen>
     <AuthStack.Screen name='SignUp' component={SignUp}></AuthStack.Screen>
     </AuthStack.Navigator>
 )
}
export default AuthNavigator;