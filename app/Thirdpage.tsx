import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';


const ThirdPage: React.FC = () => {
  const router = useRouter();


  const characters = [
    {
      name: 'Shinra Kusakabe',
      description: 'Shinra Kusakabe is a third-generation pyrokinetic and member of Special Fire Force Company 8. He’s known as “Devil’s Footprints” due to his ability to ignite his feet at will.',
      image: 'https://doublesama.com/wp-content/uploads/2025/04/Fire-Force-Season-3-Episode-2-Shinra-Kusakabe-1024x576.webp',
    },
    {
      name: 'Arthur Boyle',
      description: 'Arthur Boyle is a knight-obsessed third-generation pyrokinetic who fights using a plasma sword. He is Shinra’s eccentric and overconfident partner.',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*5g3VnCaLKe9VYUMfp9yLwA.png',
    },
    {
      name: 'Maki Oze',
      description: 'Maki Oze is a second-generation pyrokinetic and a former soldier. She is strong, composed, and capable of manipulating flames created by others.',
      image: 'https://pbs.twimg.com/media/FdhhHDKWIAMgiPP.jpg:large',
    },
    {
      name: 'Iris',
      description: 'Sister Iris is a nun affiliated with the Holy Sol Temple who works with Company 8. She offers prayers to infernals before they are put to rest.',
      image: 'https://wallpapers.com/images/featured/fire-force-iris-eenhj0hsyduy61ze.jpg',
    },
    {
      name: 'Akitaru Obi',
      description: 'Captain Akitaru Obi is the non-pyrokinetic leader of Company 8. He compensates with intense physical training and strong leadership.',
      image: 'https://staticg.sportskeeda.com/editor/2025/04/92cdd-17441047862149-1920.jpg?w=640',
    },
  ];


  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔥 Fire Force</Text>


      <Text style={styles.seriesInfo}>
        Fire Force is a high-intensity action anime set in a world where people spontaneously combust and turn into creatures known as Infernals. Special Fire Force squads are tasked with putting them to rest and uncovering the mystery behind the phenomenon.
      </Text>


      <Text style={styles.characterListTitle}>Character List:</Text>


      <ScrollView contentContainerStyle={styles.characterList}>
        {characters.map((character, index) => (
          <View key={index} style={styles.characterCard}>
            <Image source={{ uri: character.image }} style={styles.characterImage} />
            <Text style={styles.characterName}>{character.name}</Text>
            <Text style={styles.characterDescription}>{character.description}</Text>
          </View>
        ))}
      </ScrollView>


      {/* Navigation Buttons */}


      <TouchableOpacity style={styles.BackButton} onPress={() => router.replace('/ForthPage')}>
        <Text style={styles.buttonText}>Next Page</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.BackButton} onPress={() => router.replace('/Nextpage')}>
        <Text style={styles.buttonText}>back</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff4500',
    marginBottom: 15,
    textAlign: 'center',
  },
  seriesInfo: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  characterListTitle: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  characterList: {
    paddingBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  characterCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
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
    color: '#fff',
    marginBottom: 5,
  },
  characterDescription: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
  },
  NextPageButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  BackButton: {
    backgroundColor: '#ff6357',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});


export default ThirdPage;
