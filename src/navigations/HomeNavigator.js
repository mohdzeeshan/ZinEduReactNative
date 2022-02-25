import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
const Contacts = ()=>{
    return(
        <View>
        <Text>
            Hi I am Inside Contacts
        </Text>
        </View>
    );
};

const ContactDetail = ()=>{
    return(
        <View>
        <Text>
            Hi I am Inside ContactDetail
        </Text>
        </View>
    );
};
const CreateContact = ()=>{
    return(
        <View>
        <Text>
            Hi I am Inside CreateContact
        </Text>
        </View>
    );
};

const Settings = ()=>{
    return(
        <View>
        <Text>
            Hi I am Inside Settings
        </Text>
        </View>
    );
};

const HomeNavigator =()=>{
    const HomeStack = createStackNavigator();
 return(
     <HomeStack.Navigator initialRouteName="Contacts">
     <HomeStack.Screen name='Contacts' component={Contacts}></HomeStack.Screen>
     <HomeStack.Screen name='Contact Details' component={ContactDetail}></HomeStack.Screen>
     <HomeStack.Screen name='Create Contact' component={CreateContact}></HomeStack.Screen>
     <HomeStack.Screen name='Settings' component={Settings}></HomeStack.Screen>
     </HomeStack.Navigator>
 )
}
export default HomeNavigator;