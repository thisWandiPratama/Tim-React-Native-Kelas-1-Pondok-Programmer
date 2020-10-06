/* eslint-disable no-alert */
import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../assets/styles/styles';

export class RegisterSocial extends Component {
  empty() {
    alert('Not Implemented Yet');
  }

  render() {
    return (
      <View>
        <Text style={styles.createAccountLink}>Sign Up With :</Text>
        <View style={styles.createAccountContainer}>
          <TouchableOpacity onPress={() => this.empty()}>
            <Image
              source={require('../assets/icon/facebook.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.empty()}>
            <Image
              source={require('../assets/icon/google-plus.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.empty()}>
            <Image
              source={require('../assets/icon/twitter.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default RegisterSocial;
