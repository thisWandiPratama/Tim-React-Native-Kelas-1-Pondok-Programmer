import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

import img from '../assets/image/bg.png';

const {height, width} = Dimensions.get('window');

class SplashScreen extends React.Component {
  state = {
    role: true,
  };
  splash = () => {
    if (this.state.role) {
      return (
        <View>
          <View style={styles.bg}>
            <Image source={img} />
            <View style={styles.container}>
              <ActivityIndicator
                size="large"
                color="blue"
                style={styles.indicator}
              />
            </View>
          </View>
        </View>
      );
    }
  };
  render() {
    setTimeout(() => {
      this.setState({
        role: false,
      });
    }, 4000);
    return (
      <View>
        <View style={{flex: 1}}>{this.splash()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    justifyContent: 'center',
    height: height,
    width: width,
  },
  container: {
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
  },
  indicator: {
    marginTop: 350,
  },
});

export default SplashScreen;
