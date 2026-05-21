import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Pressable, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require('@/assets/images/55369954-uma-gaivota-subindo-sobre-uma-vibrante-oceano-panorama-debaixo-uma-brilhante-azul-ceu-com-fofo-nuvens-foto.jpg'); 

export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);  

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'], 
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('Nenhuma imagem selecionada.');
    }
  }

  return (
 <ScrollView
  style={styles.scrollView}
  contentContainerStyle={styles.container}>
    
      <View style={styles.container}>
           <View style={styles.imageContainer}>
              <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>


      <View style={styles.footerContainer}>
        <Button label="Choose a photo" onPress={pickImageAsync}/>
        <Button label="Use this photo" onPress={pickImageAsync}/>
      </View>
    </View>
      
      <Text style={styles.text}>𓆝 𓆟 𓆞 𓆝 𓆟</Text>
      <Text style={styles.title}>⋆. 𐙚˚࿔ Página Inicial 𝜗𝜚˚⋆</Text>

      <Text style={styles.description}>
        Bem-vindo ao nosso aplicativo de navegação! 🌊  
        Explore os mares do conhecimento e descubra tesouros escondidos em cada aba.  
        Navegue com facilidade e aproveite a jornada!
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🌟 Dica do Dia</Text>
        <Text style={styles.cardText}>
          A maior força de um navegador é a curiosidade. Nunca pare de explorar e aprender!
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  flexGrow: 1,
  paddingBottom: 30,
},
  scrollView: {
  flex: 1,
  backgroundColor: '#25292e',
},
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },

  image: {
    width: '100%',
    aspectRatio: 4,
    borderWidth: 6,
    borderColor: '#e3aa25',
  },
  content: {
  width: '100%',
  alignItems: 'center',
},

  text: {
    color: '#b8860b',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },

  title: {
    color: '#b8860b',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },

  description: {
    color: '#fffefc',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    lineHeight: 22,
  },

  card: {
    backgroundColor: '#fff3d4',
    margin: 20,
    padding: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#e3aa25',
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b8860b',
    marginBottom: 5,
  },

  cardText: {
    color: '#8b6f1d',
    fontSize: 14,
  },

  button: {
    backgroundColor: '#e3aa25',
    marginHorizontal: 50,
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 15,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});