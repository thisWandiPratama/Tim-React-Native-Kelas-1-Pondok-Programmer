import React from 'react';
import {View, Image, Text, ActivityIndicator} from 'react-native';
import Login from './src/component/login';
import Register from './src/component/register';
import logo from './src/assets/knife_party_logo_vector_by_ironpudding385_d5tclw1.png';

class App extends React.Component {
  constructor() {
    super();
    console.log('Ini dari constructor');
  }
  componentDidMount() {
    console.log('Ini dari mount');
  }
  state = {
    role: true,
  };
  splash = () => {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={logo} style={{height: 110, width: 110}} />
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  };
  render() {
    setTimeout(() => {
      this.componentDidUpdate = () => console.log('ini dari update');
      this.setState({
        role: false,
      });
    }, 3000);
    if (this.state.role) {
      return <View>{this.splash()}</View>;
    } else {
      return <Login />;
      // <Register />;
    }
  }
}
export default App;
