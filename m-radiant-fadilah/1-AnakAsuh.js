import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  Alert,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View>
        <View style={gaya.header}>
          <TouchableOpacity onPress={() => alert('Belum ada apa-apa!')}>
            <Image
              style={gaya.gambar}
              source={require('./src/assets/taskbar.png')}
            />
          </TouchableOpacity>
          <Text style={gaya.text}>Kakak Asuh Indonesia</Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={gaya.view1}>
              <Image
                style={{width: 40, height: 40}}
                source={require('./src/assets/parent.png')}
              />
              <Text style={{fontSize: 13}}>Pilih Adik Asuh</Text>
            </TouchableOpacity>
            <TouchableOpacity style={gaya.view1}>
              <Text style={{fontSize: 23, fontWeight: 'bold'}}>83</Text>
              <Text style={{fontSize: 13}}>Santri Mandiri</Text>
            </TouchableOpacity>
            <TouchableOpacity style={gaya.view1}>
              <Text style={{fontSize: 23, fontWeight: 'bold'}}>71</Text>
              <Text style={{fontSize: 13, textAlign: 'center'}}>
                Santri Belum Mandiri
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={gaya.view1}>
              <Image
                style={{width: 70, height: 70}}
                source={require('./src/assets/parent.png')}
              />
              <Text style={{fontSize: 13}}>Pilih Adik Asuh</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Text style={gaya.text2}>Adik Asuh Saya</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
            backgroundColor: 'cyan',
            height: 100,
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <View style={{marginLeft: 10}}>
            <Image
              style={{width: 40, height: 40, alignSelf: 'center'}}
              source={require('./src/assets/avatar.png')}
            />
            <Text>Rabbani N.F</Text>
          </View>
          <View>
            <Image
              style={{width: 40, height: 40, alignSelf: 'center'}}
              source={require('./src/assets/transfer.png')}
            />
            <Text>Transfer via BNI</Text>
          </View>
          <View style={{marginRight: 10}}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                alignSelf: 'center',
              }}
              source={require('./src/assets/invoice.jpg')}
            />
            <Text>Checkout</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
            backgroundColor: 'cyan',
            height: 100,
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <TouchableOpacity
            onPress={() => alert('Nama adik asuh anda: Rabbani Nur Fatimah')}
            style={{marginLeft: 10}}>
            <Image
              style={{width: 40, height: 40, alignSelf: 'center'}}
              source={require('./src/assets/taskbar.png')}
            />
            <Text>Nama Adik Asuh</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Transfer via BNI')}>
            <Image
              style={{width: 40, height: 40, alignSelf: 'center'}}
              source={require('./src/assets/taskbar.png')}
            />
            <Text>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => alert('Kami percayakan kepada Anda!')}
            style={{marginRight: 10}}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                alignSelf: 'center',
              }}
              source={require('./src/assets/taskbar.png')}
            />
            <Text>Konfirmasi</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const gaya = StyleSheet.create({
  header: {
    backgroundColor: '#1a7dff',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  gambar: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
    fontSize: 18,
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 22,
    margin: 12,
  },
  view1: {
    marginTop: 10,
    marginLeft: 10,
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cyan',
    borderRadius: 10,
  },
  view2ndtext: {
    justifyContent: 'space-between',
    backgroundColor: 'cyan',
    margin: 10,
  },
  view2nd: {
    alignContent: 'center',
  },
});

export default App;
