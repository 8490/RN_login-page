import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
const App = () => {
  const [epost, setText] = React.useState('');
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={{ flex: 1.4 }}>
        <Image style={styles.logo} source={require('../src/img/shoppincart.png')} />
      </View>
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <TextInput name="epost"
          style={styles.textinput}
          placeholder="E-post"
          underlineColorAndroid="transparent"
          placeholderTextColor="black"
          autoCapitalize="none"
          textContentType='emailAddress'
          label='E-post'
          value={epost}
          />
        <TextInput
          label='Password'
          style={styles.textinput}
          placeholderTextColor='black'
          returnKeyType='go'
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
          textContentType='password'
          />
      </View>
      <View style={{ flex: 1.8, justifyContent: "flex-start" }}>
        <TouchableOpacity
        style={styles.touch}
        onPress={() => setText(epost)}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Giris Yap</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => Alert.alert('Registiration pressed')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Kayit Ol</Text>
            </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: "#80CBC4",
    justifyContent: 'flex-start',
  },
  textinput: {
    width: '90%',
    height: 45,
    alignSelf: 'center',
    backgroundColor: '#ECEFF1',
    margin: 15,
    paddingLeft: 15,
    borderRadius: 7,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#546E7B",
    color: "white",
    height: 45,
    width: '45%',
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 6,
  },
  touch: {
    justifyContent: "flex-start",
  },
  buttonText: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  logo: {
    resizeMode: 'contain',
    height: '100%',
    width: '35%',
    alignSelf: 'center'
  }
});
export default App;