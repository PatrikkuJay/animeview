import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import 'react-native-gesture-handler';
















const HomeScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        source={{ uri: 'https://miro.medium.com/v2/resize:fit:1200/1*xrXsgTp7dHlZd8U3RBY3ww.jpeg' }}
        style={styles.backgroundImage}
      />
      <View style={styles.navbar}>
        <Text style={styles.logo}>
          <Text style={styles.logoAccent}>ANIME VIEW</Text>
        </Text>
        <View style={styles.authButtons}>
          <TouchableOpacity style={[styles.authButton, styles.loginButton]} onPress={() => router.push('/Login')}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.authButton, styles.registerButton]} onPress={() => router.push('/Register')}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    <View style={styles.overlay}>
        <Text style={styles.title}>WELCOME TO ANIME VIEW!</Text>
        <Text style={styles.subtitle}>
        Anime" refers to a style of Japanese animation. It is a Japanese word derived from the English word "animation", shortened to "anime". In Japan, "anime" generally refers to all animation, regardless of origin or style. However, outside of Japan, and particularly in English, "anime" is commonly used to refer specifically to Japanese animation.
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, position: 'relative' },
  backgroundImage: { position: 'absolute', width: '100%', height: '100%', resizeMode: 'cover' },
  navbar: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 10,
  },
  logo: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  logoAccent: { color: '#00bcd4' },
  authButtons: { flexDirection: 'column', alignItems: 'center' },
  authButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  loginButton: { backgroundColor: '#00bcd4' },
  registerButton: { backgroundColor: '#ff9800' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  subtitle: {
    fontSize: 18,
    color: '#ddd',
    marginBottom: 20,
    textAlign: 'left',
    paddingRight: 50,
  },
});
export default HomeScreen;
