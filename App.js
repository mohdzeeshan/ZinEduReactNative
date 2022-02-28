import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigator';


// const Stack = createNativeStackNavigator();

// const Main =({navigation})=>{
//   return(
//     <SafeAreaView style={{flex:1 , justifyContent: 'center', alignItems :'center'}}>
//       <Text>Main Screen</Text>
//       <TouchableOpacity
//      onPress={() => navigation.navigate('Home', {prevScreen: 'Main'})}
//       style={{ flexDirection:"row", backgroundColor:"#DDDDDD"}}>
      
//       <Text>Go to HOME</Text>
//       </TouchableOpacity>
//     </SafeAreaView>

//   );

// }
// const Home =({navigation, route}) =>{
//   const {prevScreen} = route.params;
//   return(
//   <SafeAreaView style={{flex:1, justifyContent:'center', alignItems :'center'}}>
//     <Text>Home Screen</Text>
//     <Text>Comming From {prevScreen}</Text>
//     <TouchableOpacity
//      onPress={() => navigation.push('Home')}
//       style={{ flexDirection:"row", backgroundColor:"#DDDDDD"}}>
//       <Text>Go agin to Home</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//      onPress={() =>{
//       //  navigation.popToTop()
//       navigation.navigate('Main')
//        }
//       }
//       style={{ flexDirection:"row", backgroundColor:"#DDDDDD"}}>
      
//       <Text>Back to Home</Text>
//       </TouchableOpacity>
//   </SafeAreaView>
//   )
// }

const App = () => {
  return (
    <NavigationContainer>
    <AuthNavigator>
    </AuthNavigator>
    </NavigationContainer>
  );
};

export default App;
