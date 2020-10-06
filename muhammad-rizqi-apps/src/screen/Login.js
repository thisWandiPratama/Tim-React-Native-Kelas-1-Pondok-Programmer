/* eslint-disable no-alert */
import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {styles} from '../assets/styles/styles';
import RegisterSocial from '../components/RegisterSocial';

export default class Login extends Component {
  empty() {
    alert('Not Implemented Yet');
  }
  render() {
    return (
      <ScrollView style={styles.screen}>
        <StatusBar backgroundColor="#181f3d" />
        <View style={styles.container}>
          <View style={styles.loginContainer}>
            <View>
              <Image
                style={styles.companyLogo}
                source={require('../assets/img/logo.png')}
              />
            </View>
            <Text style={styles.loginTitle}>Login to your account </Text>

            <View style={styles.groupContainer}>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#a0a1a2"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor="#a0a1a2"
                />
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => this.empty()}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.createAccountContainer}>
              <Text style={styles.createAccountText}>
                Don't have an account?{' '}
              </Text>
              <Text
                style={styles.createAccountLink}
                onPress={() => this.props.onRegister()}>
                Sign up
              </Text>
            </View>

            <Text style={styles.createAccountLink} onPress={() => this.empty()}>
              Forgot Password?
            </Text>
            <View style={styles.groupContainer}>
              <RegisterSocial />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
