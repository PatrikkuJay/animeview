import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';


const DashboardScreen: React.FC = () => {
  const router = useRouter();
  const { email, password } = useLocalSearchParams();


  const [userEmail, setUserEmail] = useState(email || '');
  const [userPassword, setUserPassword] = useState(password || '');


  const characters = [
    {
      name: 'Taro Sakamoto',
      description:
        'Taro Sakamoto is a legendary ex-hitman who gave up crime to live a quiet life running a convenience store with his family.',
      image: 'https://images6.alphacoders.com/138/1388238.png',
    },
    {
      name: 'Lu Xiaotong',
      description:
        'Lu Xiaotong is the daughter of a Triad family who now works at Sakamoto\'s store. She’s skilled, tough, and reliable.',
      image:
        'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/01/lu-shaotang-sakamoto-days.jpg',
    },
    {
      name: 'Shin Asakura',
      description:
        'A telepathic ex-hitman and Sakamoto’s partner. Once tasked with killing him, he now works at the store and supports the family.',
      image:
        'https://i.pinimg.com/originals/e4/fb/bf/e4fbbf197bb186850ee74614c5d79905.jpg',
    },
    {
      name: 'Aoi Sakamoto',
      description:
        'Aoi is Sakamoto\'s wife. Her love and kindness helped Sakamoto leave the world of assassins and live a peaceful life.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Ux25iGELDJEYeFfKp3fT-caFG9cRGJrT7Q&s',
    },
    {
      name: 'Hana Sakamoto',
      description:
        'Hana is the young daughter of Taro and Aoi. She brings joy and innocence into Sakamoto\'s world.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsouS7YxzgZiACTuWpCK1dKJMreUcI69QyA&s',
    },
  ];


  const handleUpdate = () => {
    Alert.alert('Updated', `New Email: ${userEmail}\nNew Password: ${userPassword}`);
  };


  const handleDelete = () => {
    Alert.alert('Deleted', 'Your profile has been deleted.', [
      { text: 'OK', onPress: () => router.replace('/') }
    ]);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sakamoto Days</Text>


      <Text style={styles.seriesInfo}>
     Taro Sakamoto (坂本さかもと太郎たろう Sakamoto Tarō?) is the main protagonist of the series Sakamoto Days.
     Previously the best assassin in the world and a former member of the Order, he now runs a convenience store with his wife Aoi and daughter Hana.
      </Text>


      <Text style={styles.characterListTitle}>Character List:</Text>


      <ScrollView contentContainerStyle={styles.characterList}>
        {characters.map((character, index) => (
          <View key={index} style={styles.characterCard}>
            <Image
              source={{ uri: character.image }}
              style={styles.characterImage}
            />
            <Text style={styles.characterName}>{character.name}</Text>
            <Text style={styles.characterDescription}>
              {character.description}
            </Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.NextButton}
        onPress={() => router.replace('/Nextpage')}
      >
        <Text style={styles.buttonText}>Next Page</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.ExitButton}
        onPress={() => router.replace('/')}
      >
        <Text style={styles.buttonText}>Exit</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090909',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#04f6ce',
    marginBottom: 20,
  },
  seriesInfo: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  characterListTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#04f6ce',
    marginBottom: 15,
    textAlign: 'center',
  },
  characterList: {
    width: '100%',
    paddingBottom: 20,
  },
  characterCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  characterImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  characterName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  characterDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 22,
  },
  NextButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  ExitButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});


export default DashboardScreen;
