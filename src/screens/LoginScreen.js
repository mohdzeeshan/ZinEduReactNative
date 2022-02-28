import React,{useState, useEffect} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
  } from 'react-native';
  import { Icon } from 'react-native-elements';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <View style={styles.bigCircle}></View>
            <View style={styles.smallCircle}></View>
            <View style={styles.centerizedView}>
              <View style={styles.authBox}>
                <Text style={styles.loginTitleText}>Login</Text>
                <View style={styles.hr}></View>
                <View style={styles.inputBox}>
                  <Text style={styles.inputLabel}>Email</Text>
                  <TextInput
                  onChangeText={(v)=>{setEmail(v)}}
                    style={styles.input}
                    keyboardType='email-address'
                    textContentType='emailAddress'
                  />
                </View>
                <View style={styles.inputBox}>
                  <Text style={styles.inputLabel}>Password</Text>
                  <TextInput
                   onChangeText={(pass)=>{setPassword(pass)}}
                    style={styles.input}
           
                    secureTextEntry={true}
                    textContentType='password'
                  />
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={async () =>{
                     await axios({
                      method: 'post',
                      url: 'https://ap.zinedu.com/login/',
                      data: {
                        username: {email},
                        password: {password}
                      }
                    });
                    console.log(email)
                    console.log(password)
                }}>
                
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      alignItems: 'center'
      
    },
    bigCircle: {
      width: Dimensions.get('window').height * 0.7,
      height: Dimensions.get('window').height * 0.7,
      backgroundColor: '#ff6b81',
      borderRadius: 1000,
      position: 'absolute',
      right: Dimensions.get('window').width * 0.25,
      top: -50,
    },
    smallCircle: {
      width: Dimensions.get('window').height * 0.4,
      height: Dimensions.get('window').height * 0.4,
      backgroundColor: '#ff7979',
      borderRadius: 1000,
      position: 'absolute',
      bottom: Dimensions.get('window').width * -0.2,
      right: Dimensions.get('window').width * -0.3,
    },
    centerizedView: {
      width: '100%',
      top: '25%',
    },
    authBox: {
      width: '80%',
      backgroundColor: '#fafafa',
      borderRadius: 20,
      alignSelf: 'center',
      paddingHorizontal: 14,
      paddingBottom: 30,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    logoBox: {
      width: 100,
      height: 100,
      backgroundColor: '#eb4d4b',
      borderRadius: 1000,
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      top: -50,
      marginBottom: -50,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    loginTitleText: {
      fontSize: 26,
      fontWeight: 'bold',
      marginTop: 10,
    },
    hr: {
      width: '100%',
      height: 0.5,
      backgroundColor: '#444',
      marginTop: 6,
    },
    inputBox: {
      marginTop: 10,
    },
    inputLabel: {
      fontSize: 18,
      marginBottom: 6,
    },
    input: {
      width: '100%',
      height: 40,
      backgroundColor: '#dfe4ea',
      borderRadius: 4,
      paddingHorizontal: 10,
    },
    loginButton: {
      backgroundColor: '#ff4757',
      marginTop: 10,
      paddingVertical: 10,
      borderRadius: 4,
    },
    loginButtonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
    registerText: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
    },
    forgotPasswordText: {
      textAlign: 'center',
      marginTop: 12,
      fontSize: 16,
    },
  });