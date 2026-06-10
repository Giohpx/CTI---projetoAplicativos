import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';

const IMAGENS = [
  require('../../assets/images/aa.jpeg'),
  require('../../assets/images/images (8).jpeg'),
  require('../../assets/images/luffy.jpeg'),
  require('../../assets/images/Marinheiros e Shichibukais.png'),
  require('../../assets/images/why-bigger-is-better-human-giants-in-one-piece-v0-493yd4z62zv81.webp'),
  require('../../assets/images/Dorry.jpg.webp'),
];

interface Carta {
  id: number;
  imagem: any;
  isFlipped: boolean;
  isMatched: boolean;
}

export default function JogoDaMemoria() {
  const [cartas, setCartas] = useState<Carta[]>([]);
  const [escolha1, setEscolha1] = useState<Carta | null>(null);
  const [escolha2, setEscolha2] = useState<Carta | null>(null);
  const [bloqueiaClique, setBloqueiaClique] = useState(false);

  const iniciarJogo = () => {
    const cartasEmbaralhadas = [...IMAGENS, ...IMAGENS]
      .sort(() => Math.random() - 0.5)
      .map((imagem, index) => ({
        id: index,
        imagem,
        isFlipped: false,
        isMatched: false,
      }));

    setCartas(cartasEmbaralhadas);
    setEscolha1(null);
    setEscolha2(null);
    setBloqueiaClique(false);
  };

  useEffect(() => {
    iniciarJogo();
  }, []);

  const virarCarta = (cartaClicada: Carta) => {
    if (bloqueiaClique || cartaClicada.isFlipped || cartaClicada.isMatched) return;

    const novasCartas = cartas.map((carta) =>
      carta.id === cartaClicada.id ? { ...carta, isFlipped: true } : carta
    );
    setCartas(novasCartas);

    if (!escolha1) {
      setEscolha1({ ...cartaClicada, isFlipped: true });
    } else if (!escolha2) {
      setEscolha2({ ...cartaClicada, isFlipped: true });
    }
  };

  useEffect(() => {
    if (escolha1 && escolha2) {
      setBloqueiaClique(true); 

      if (escolha1.imagem === escolha2.imagem) {
        setCartas((prevCartas) => {
          const novas = prevCartas.map((carta) => {
            if (carta.imagem === escolha1.imagem) {
              return { ...carta, isMatched: true };
            }
            return carta;
          });
          
          if (novas.every(c => c.isMatched)) {
            setTimeout(() => Alert.alert('Você Venceu! 🎉', 'Parabéns, você encontrou todos os pares!', [
              { text: 'Jogar Novamente', onPress: iniciarJogo }
            ]), 500);
          }
          return novas;
        });
        resetarTurno();
      } else {
        setTimeout(() => {
          setCartas((prevCartas) =>
            prevCartas.map((carta) => {
              if (carta.id === escolha1.id || carta.id === escolha2.id) {
                return { ...carta, isFlipped: false };
              }
              return carta;
            })
          );
          resetarTurno();
        }, 1000);
      }
    }
  }, [escolha1, escolha2]);

  const resetarTurno = () => {
    setEscolha1(null);
    setEscolha2(null);
    setBloqueiaClique(false);
  };

  const jogoFinalizado = cartas.length > 0 && cartas.every(carta => carta.isMatched);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogo da Memória</Text>

      <View style={styles.grid}>
        {cartas.map((carta) => (
          <TouchableOpacity
            key={carta.id}
            style={[
              styles.carta,
              (carta.isFlipped || carta.isMatched) ? styles.cartaVirada : styles.cartaOculta
            ]}
            onPress={() => virarCarta(carta)}
            activeOpacity={0.8}
          >
            {(carta.isFlipped || carta.isMatched) ? (
              <Image source={carta.imagem} style={styles.imagemCarta} />
            ) : (
              <Text style={styles.textoOculto}>❓</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {jogoFinalizado && (
        <View style={styles.containerVitoria}>
          <Text style={styles.textoVitoriaTitulo}>🏆 VOCÊ VENCEU! 🏆</Text>
          <Text style={styles.textoVitoriaSub}>O Rei dos Piratas ficaria orgulhoso!</Text>
        </View>
      )}

      <TouchableOpacity style={styles.botaoReiniciar} onPress={iniciarJogo}>
        <Text style={styles.textoBotao}>Reiniciar Jogo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: 50,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffdd04',
    marginBottom: 20, 
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10, 
    paddingHorizontal: 10,
  },
  carta: {
    width: 80,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 3,
    overflow: 'hidden', 
  },
  cartaOculta: {
    backgroundColor: '#dbc834',
  },
  cartaVirada: {
    backgroundColor: '#ecf0f1',
  },
  textoOculto: {
    fontSize: 40,
  },
  imagemCarta: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },
  containerVitoria: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f1c40f',
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  textoVitoriaTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  textoVitoriaSub: {
    fontSize: 16,
    color: '#2c3e50',
    textAlign: 'center',
  },
  botaoReiniciar: {
    marginTop: 30,
    backgroundColor: '#f00d0d',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});