import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.fontTrouble}>Trouble Sign Up ?</Text>
        </View>
        <View>
          <Text style={styles.fontWelcome}>Welcome!</Text>
        </View>

        <KeyboardAvoidingView behavior="padding">
          <TextInput style={styles.usernameInput} placeholder="Name" />
          <TextInput style={styles.emailInput} placeholder="Email" />
          <TextInput
            style={styles.emailInput}
            secureTextEntry={true}
            placeholder="Password"
          />
          <TextInput
            style={styles.emailInput}
            secureTextEntry={true}
            placeholder="Re-Enter Password"
          />
        </KeyboardAvoidingView>

        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Under Development')}>
            <Text
              style={styles.signUp}
              onPress={() => alert('Under Development')}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginLeft: 20,
  },
  fontTrouble: {
    alignSelf: 'flex-end',
    marginTop: 15,
    color: 'gray',
  },
  fontWelcome: {
    marginTop: 40,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 28,
    letterSpacing: 1,
  },
  fontEnter: {
    color: 'gray',
  },
  fontRemember: {
    fontSize: 12,
    marginTop: 20,
  },
  usernameInput: {
    height: 40,
    borderWidth: 1,
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: 'silver',
    marginTop: 30,
  },
  emailInput: {
    height: 40,
    borderWidth: 1,
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: 'silver',
    marginTop: 30,
  },
  containerButton: {
    position: 'absolute',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'deepskyblue',
    height: 50,
    width: 300,
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 450,
  },
  signUp: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
  },
});

export default Login;
