import React, { useState } from 'react';
import {View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity} from 'react-native';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const showPopup = (message) => {
    Alert.alert('Notification', message, [{ text: 'OK' }]);
  };

 
  const handleSignIn = () => {
    if (!email) {
      showPopup('Please enter your email.');
    } else if (!password) {
      showPopup('Please enter your password.');
    } else {
      if (email === 'example@example.ca' && password === 'password') {
        showPopup('Login Successful');
        navigation.navigate('HomeScreen'); 
      } else {
        showPopup('Invalid Login Credentials.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TRADENEST</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email..."
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Password..."
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <Button title="Sign In" color="#FF8B94" onPress={handleSignIn} />

      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.link}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6ab0af', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#000000', // black
  },
  inputGroup: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    color: '#000000', // black
    marginBottom: 4,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF', // white
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  link: {
    fontSize: 15,
    color: '#000000', // black
    marginHorizontal: 8,
    textDecorationLine: 'underline',
  },
});

export default LoginPage;
