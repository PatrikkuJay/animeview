import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Add this import




const RegisterScreen = () => {
  const router = useRouter(); // Use the router hook
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isRegistered, setIsRegistered] = useState(false); // Track registration success




  const isEmailValid = email.includes('@') && email.endsWith('@gmail.com');
  const isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&]{8,20}$/.test(password);




  const handleRegister = () => {
    if (fullName.trim() === '') return setMessage('Full Name cannot be empty.');
    if (!isEmailValid) return setMessage('Invalid email (must end with @gmail.com).');
    if (!isPasswordValid) return setMessage('Invalid password (8-20 chars, must contain a number & special char).');
   
    setMessage('');
   
    // On successful registration, update the UI to show a success message
    setIsRegistered(true);
   
    Alert.alert("Success!", "You have successfully registered. You can now log in.", [
      {
        text: "OK",
        onPress: () => {
          setFullName('');
          setEmail('');
          setPassword('');
        }
      }
    ]);
  };




  // Function to handle exit button (navigate back to HomeScreen)
  const handleExit = () => {
    router.push('/'); // Use this to navigate to HomeScreen
  };




  return (
    <ImageBackground
      source={{ uri: 'https://sm.ign.com/ign_it/screenshot/default/2_s1ht.jpg' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.logo}>Anime<Text style={styles.logoAccent}>View</Text></Text>
        <Text style={styles.registerText}>Register</Text>
       
        {isRegistered && (
          <Text style={styles.successMessage}>Successfully Registered!</Text> // Success message shown on the screen
        )}




        <View style={styles.registerBox}>
          <Text style={styles.label}>Full Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#aaa"
            value={fullName}
            onChangeText={setFullName}
          />
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#aaa"
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
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          {password.length > 0 && (
            <Text style={isPasswordValid ? styles.validText : styles.invalidText}>
              {isPasswordValid ? "Password is Valid" : "Invalid Password (8-20 chars, must contain a number & special char)"}
            </Text>
          )}
         
          {message !== '' && <Text style={styles.invalidText}>{message}</Text>}




          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>




        {/* Exit Button */}
        <TouchableOpacity style={styles.exitButton} onPress={handleExit}>
          <Text style={styles.buttonText}>Exit Here</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};




const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', alignItems: 'center', justifyContent: 'center' },
  logo: { fontSize: 30, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  logoAccent: { color: '#ff6347' },
  registerText: { fontSize: 32, fontWeight: 'bold', color: 'white', marginBottom: 20 },
  successMessage: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  registerBox: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 20,
    borderRadius: 10,
    width: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  label: { color: '#fff', fontSize: 14, marginBottom: 5 },
  input: {
    backgroundColor: '#333',
    color: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 5,
  },
  validText: { color: 'green', fontSize: 12, marginBottom: 10 },
  invalidText: { color: 'red', fontSize: 12, marginBottom: 10 },
  registerButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  exitButton: {
    backgroundColor: '#0a51f3',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});




export default RegisterScreen;