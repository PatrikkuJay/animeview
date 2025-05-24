import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';


const ForthPage: React.FC = () => {
  const router = useRouter();


  const characters = [
    {
      name: 'Eren Yeager',
      description: 'Eren is the protagonist who vows to destroy the Titans after they destroy his hometown and kill his mother. He later gains the power of the Attack Titan.',
      image: 'https://static.toiimg.com/thumb/msid-115192702,width-1070,height-580,imgsize-24440,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
    },
    {
      name: 'Mikasa Ackerman',
      description: 'Mikasa is Eren’s adoptive sister and one of the most skilled fighters in the Survey Corps. She is known for her loyalty and strength.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7K-kWtkkD9plTiOfY7PPNNbLbvZdCOirr5g&s',
    },  
    {
      name: 'Levi Ackerman',
      description: 'Captain Levi is humanity’s strongest soldier. He’s highly disciplined, calm under pressure, and deadly in combat.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_3b-x7mXsq4eZ5UJZuqa-Tyxk0SHp1JlsrvksdgIkVUo0HJ5glkpwmvT1nUDU7bJYzs&usqp=CAU',
    },  
    {
    name: 'Armin Arlert',
    description: 'Armin is Eren’s best friend, known for his intelligence and tactical thinking, often devising strategies for the Survey Corps.',
    image: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Armin-Arlert.Attack-on-Titan.webp',
   },
   {
    name: 'Sasha Blouse',
    description: 'Nicknamed “Potato Girl,” Sasha is a skilled marksman and scout known for her love of food and cheerful personality.',
    image: 'https://avatarfiles.alphacoders.com/970/thumb-1920-97032.gif',
  },
{
    name: 'Jean Kirstein',
    description: 'Jean is a pragmatic and realistic soldier in the Survey Corps who often takes on a leadership role during operations.',
    image: 'https://practicaltyping.com/wp-content/uploads/2022/05/jeanaot.jpg',
  },
  {
    name: 'Hange Zoë',
    description: 'Hange is obsessed with studying Titans and often shows excitement over experiments and encounters, but is also a brilliant commander.',
    image: 'https://images.surferseo.art/28625359-246e-4ec8-a577-0ba4597f2b6c.jpeg',
  },
  {
    name: 'Connie Springer',
    description: 'Connie is a member of the Survey Corps, known for his speed, agility, and laid-back attitude.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wP_i9TFwkPcp-KT1uJT6qRcT0-XrtiKVyw&s',
  },
  {
    name: 'Historia Reiss',
    description: 'Historia is the true heir to the throne within the Walls and a former member of the Survey Corps, known for her kindness and hidden strength.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYhA8KUTvkyiAWllR2b9AKAWaIK-zpm4OrdA&s',
  },
  {
    name: 'Reiner Braun',
    description: 'Reiner is a warrior from Marley who infiltrated the Walls. He is the Armored Titan and struggles with guilt and dual identity.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24Ve2zVO1id8P_Wa_x-dbjDPwMpwTSpDlnw&s',
  },
];


  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚔️ Attack on Titan </Text>


      {/* Added series info */}
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


      <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/ThirdPage')}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.exitButton} onPress={() => router.replace('/')}>
        <Text style={styles.buttonText}>Exit</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#e63946',
    marginBottom: 10,
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
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  characterList: {
    paddingBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  characterCard: {
    backgroundColor: '#2e2e2e',
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
  backButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  exitButton: {
    backgroundColor: '#ff3c38',
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


export default ForthPage;
