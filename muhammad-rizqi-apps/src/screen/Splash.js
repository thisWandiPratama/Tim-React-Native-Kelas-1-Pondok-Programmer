/* eslint-disable no-alert */
import React, {Component} from 'react';
import {View, Image, StatusBar, ActivityIndicator} from 'react-native';
import {styles} from '../assets/styles/styles';
import RegisterSocial from '../components/RegisterSocial';

export class Splash extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <StatusBar backgroundColor="#181f3d" />
        <View style={styles.container}>
          <View>
            <Image
              style={styles.companyLogo}
              source={require('../assets/img/logo.png')}
            />
            <ActivityIndicator color="white" size="large" />
          </View>
        </View>
      </View>
    );
  }
}

export default Splash;
