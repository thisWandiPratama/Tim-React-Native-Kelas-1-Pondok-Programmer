import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import background from '../assets/image/bg.png';
import icon from '../assets/icon/logoPI-removebg-preview.png';

const {height, width} = Dimensions.get('window');

class GetStarted extends React.Component {
  render() {
    return (
      <View>
        <View>
          <ImageBackground source={background} style={styles.container}>
            <View style={styles.topText}>
              <Image source={icon} style={styles.icon} />
              <Text
                style={styles.fontLogin}
                onPress={() => alert('Under Development')}>
                LOGIN
              </Text>
            </View>
            <View style={styles.bottomText}>
              <Text style={styles.font1}>Let's Get Started</Text>
              <Text style={styles.font2}>
                Everything works better together.
              </Text>
            </View>
            <View style={styles.containerButton}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => alert('Under Development')}>
                <Text
                  style={styles.signUp}
                  onPress={() => alert('Under Development')}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    justifyContent: 'center',
  },

  icon: {
    marginTop: 70,
    marginLeft: 15,
    height: 60,
    width: 60,
    position: 'absolute',
  },
  fontLogin: {
    marginTop: 80,
    marginLeft: 280,
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
    textDecorationLine: 'underline',
  },
  bottomText: {
    height: height,
    width: width,
    justifyContent: 'center',
  },
  font1: {
    marginTop: 60,
    marginLeft: 20,
    fontSize: 55,
    letterSpacing: 1.5,
    fontWeight: 'bold',
    fontFamily: 'Nunito-Bold.ttf',
  },
  font2: {
    marginTop: 10,
    marginLeft: 20,
    color: 'gray',
  },
  containerButton: {
    position: 'absolute',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'deepskyblue',
    height: 60,
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

export default GetStarted;
