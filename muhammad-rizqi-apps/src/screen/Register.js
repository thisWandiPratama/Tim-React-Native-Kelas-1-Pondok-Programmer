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

export default class Register extends Component {
  empty() {
    alert('Not Implemented Yet');
  }
  render() {
    return (
      <ScrollView style={styles.screen}>
        <StatusBar backgroundColor="#181f3d" />

        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => this.props.onLoginClick()}>
          <Image
            source={require('../assets/icon/arrow_back_24px_outlined.png')}
          />
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.loginContainer}>
            <Text style={styles.loginTitle}>Create an Account </Text>
            <View style={styles.groupContainer}>
              <View style={styles.inputGroup}>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Username</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#a0a1a2"
                  />
                </View>

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

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Confirm Password</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  placeholderTextColor="#a0a1a2"
                />
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.onLoginClick()}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.createAccountContainer}>
              <Text style={styles.createAccountText}>
                Already have an account?{' '}
              </Text>
              <Text
                style={styles.createAccountLink}
                onPress={() => this.props.onLoginClick()}>
                Login
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
