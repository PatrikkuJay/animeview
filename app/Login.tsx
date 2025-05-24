import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Correct import for router








const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);








  const router = useRouter(); // Initialize router








  useEffect(() => {
    setIsEmailValid(email.endsWith('@gmail.com'));
  }, [email]);








  useEffect(() => {
    setIsPasswordValid(/^(?=.*[0-9])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&]{8,20}$/.test(password));
  }, [password]);








  const handleLogin = () => {
    if (isEmailValid && isPasswordValid) {
      Alert.alert("Login Successful", "Welcome back!", [
        {
          text: "OK",
          onPress: () => router.push('/Dashboard'), // Correct navigation to Dashboard
        }
      ]);
    } else {
      Alert.alert('Invalid Credentials', 'Please enter valid credentials!');
    }
  };








  return (
    <ImageBackground
      source={{ uri: 'https://www.nme.com/wp-content/uploads/2020/10/Genshin-Impact-Credit-miHoYo-3@2000x1270.jpg' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.logo}>Anime<Text style={styles.logoAccent}>View</Text></Text>
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.loginBox}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={[styles.input, !isEmailValid && email.length > 0 ? styles.invalidInput : null]}
            placeholder="Enter your email"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          {email.length > 0 && (
            <Text style={isEmailValid ? styles.validText : styles.invalidText}>
              {isEmailValid ? "Email is Valid" : "Invalid Email (must end with @gmail.com)"}
            </Text>
          )}








          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={[styles.input, !isPasswordValid && password.length > 0 ? styles.invalidInput : null]}
            placeholder="Enter your password"
            placeholderTextColor="#ccc"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          {password.length > 0 && (
            <Text style={isPasswordValid ? styles.validText : styles.invalidText}>
              {isPasswordValid ? "Password is Valid" : "Invalid Password (8-20 chars, must contain a number & special char)"}
            </Text>
          )}      








          {/* Optional: Navigate directly to Dashboard for testing */}
          <TouchableOpacity
            style={[styles.loginButton, { backgroundColor: '#00bcd4', marginTop: 10 }]}
            onPress={() => router.push('/Dashboard')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>








          {/* Optional: Navigate to Register */}
          <TouchableOpacity
            style={[styles.loginButton, { backgroundColor: '#ff6347', marginTop: 10 }]}
            onPress={() => router.push('/Register')}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>








        </View>
      </View>
    </ImageBackground>
  );
};








const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', alignItems: 'center', justifyContent: 'center' },
  logo: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  logoAccent: { color: '#00bcd4' },
  loginText: { fontSize: 32, fontWeight: 'bold', color: 'white', marginBottom: 20 },
  loginBox: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 20,
    borderRadius: 10,
    width: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  label: { color: '#fff', fontSize: 14, marginBottom: 5 },
  input: {
    backgroundColor: '#444',
    color: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 5
  },
  validText: { color: 'green', fontSize: 12, marginBottom: 10 },
  invalidText: { color: 'red', fontSize: 12, marginBottom: 10 },
  invalidInput: { borderColor: 'red', borderWidth: 1 },
  loginButton: {
    backgroundColor: '#ff9800',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});








export default LoginScreen;
