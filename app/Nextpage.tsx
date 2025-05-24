import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';


const NextPage: React.FC = () => {
  const router = useRouter();


  const characters = [
    {
      name: 'Yuji Itadori',
      description: 'Yuji Itadori is the main protagonist of the manga series Jujutsu Kaisen. He is a student at Jujutsu High and is the vessel of the strongest curse: Sukuna.',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQpLrBm2hbxh7JFMMdVLA69izc37xcPsfIlIfgqMfW7wd5gJONpCRNQVm8mMC3hJoBKS667lnq01LcDkcC-ppyuNraJPDWEoH-sUL6_lg',
    },
    {
      name: 'Nobara Kugisaki',
      description: 'Nobara Kugisaki is the tritagonist of the Jujutsu Kaisen series. She is a first-year student and grade 3 jujutsu sorcerer at Tokyo Jujutsu High.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9IeH-ZunKPiej2eAAmMeBdCuosUNW0ZRW8jKYm02dy4jRhbDXCFBvAKfVwnb0lfxvMWSvl2khyi4nVoXOmJHDMU5vDQeh9KrR0Fm9Kg',
    },
    {
      name: 'Megumi Fushiguro',
      description: 'Megumi Fushiguro is the deuteragonist of the Jujutsu Kaisen series. He is a grade 2 jujutsu sorcerer at Tokyo Jujutsu High.',
      image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/05/Megumi-Fushiguro-Out-of-Uniform.jpg',
    },
    {
      name: 'Satoru Gojo',
      description: 'Satoru Gojo is one of the main protagonists of the Jujutsu Kaisen series. He is a special grade jujutsu sorcerer and widely recognized as the strongest in the world.',
      image: 'https://preview.redd.it/satoru-gojo-reference-fanart-v0-e3zaq33rfn791.jpg?width=640&crop=smart&auto=webp&s=ec370d22c5231563dcb05d37a2fc201265747428',
    },
    {
      name: 'Ryomen Sukuna',
      description: 'Ryomen Sukuna is the main antagonist of the Jujutsu Kaisen series. He was once the King of Curses and is known as the greatest Sorcerer to ever live.',
      image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/06/ryomen-sukuna.jpg',
    },
    {
      name: 'Kento Nanami',
      description: 'Kento Nanami is a former salaryman who became a jujutsu sorcerer. He is known for his calm and calculated demeanor, and his technique involves a methodical approach to his enemies.',
      image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/08/collage-maker-09-aug-2023-09-51-pm-9.jpg',
    },
    {
      name: 'Maki Zenin',
      description: 'Maki Zenin is a second-year student at Jujutsu High. Born into the Zenin Clan, Maki is known for her exceptional combat skills despite not possessing cursed energy.',
      image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/02/img_7624.JPG',
    },
    {
      name: 'Toge Inumaki',
      description: 'Toge Inumaki is a student at Tokyo Jujutsu High. His cursed technique involves speaking in a limited way, using rice ball ingredients to communicate commands to his enemies.',
      image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/12/jujutsu-kaisen-supporting-character-Toge-Inumaki-e1645718660964.jpg',
    },
    {
      name: 'Panda',
      description: 'Panda is a unique cursed corpse and a student at Jujutsu High. He possesses the ability to speak and has a gentle personality despite his intimidating appearance.',
      image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/05/Jujutsu-Kaisen-Panda.jpg',
    },
  ];


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jujutsu Kaisen</Text>


      <Text style={styles.seriesInfo}>
        Jujutsu Kaisen is a popular manga and anime series that follows the story of Yuji Itadori, a high school student who becomes involved in the world of curses and jujutsu sorcerers. Together with his allies, he faces powerful cursed spirits and learns about his own powers as the vessel of the King of Curses, Ryomen Sukuna.
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


      {/* Back Button */}
      <TouchableOpacity
        style={styles.BackButton}
        onPress={() => router.replace('/Dashboard')}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>


      {/* Next Page Button */}
      <TouchableOpacity
        style={styles.NextButton}
        onPress={() => router.replace('/ThirdPage')} // Replace with actual route
      >
        <Text style={styles.buttonText}>Next Page</Text>
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
    marginBottom: 10,
  },
  characterList: {
    paddingBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  characterCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    width: '90%',
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
  },
  characterDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  BackButton: {
    backgroundColor: '#ff6357',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  NextButton: {
    backgroundColor: '#4a90e2',
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


export default NextPage;
