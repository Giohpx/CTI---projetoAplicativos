import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";

const Banner = require("/Users/ra2457088/CTI-projetoAplicativos/assets/images/55369954-uma-gaivota-subindo-sobre-uma-vibrante-oceano-panorama-debaixo-uma-brilhante-azul-ceu-com-fofo-nuvens-foto.jpg");

const frutas = [
  {
    nome: "Hito Hito no Mi, Modelo Nika",
    usuario: "Monkey D. Luffy",
    poder:
      "Permite transformar o corpo em borracha e despertar o lendário Guerreiro da Libertação.",
  },
  {
    nome: "Uo Uo no Mi",
    usuario: "Kaido",
    poder:
      "Transformação em um gigantesco dragão azul capaz de controlar os céus e lançar ataques devastadores.",
  },
  {
    nome: "Kage Kage no Mi",
    usuario: "Gecko Moria",
    poder:
      "Permite controlar sombras, roubá-las e criar soldados extremamente poderosos.",
  },
  {
    nome: "Mera Mera no Mi",
    usuario: "Ace / Sabo",
    poder:
      "Permite criar, controlar e se transformar completamente em fogo.",
  },
  {
    nome: "Gura Gura no Mi",
    usuario: "Barba Branca",
    poder:
      "Cria terremotos gigantescos capazes de destruir ilhas inteiras.",
  },
  {
    nome: "Tora Tora no Mi",
    usuario: "Usuário Tigre",
    poder:
      "Permite se transformar em um tigre feroz, aumentando força e velocidade.",
  },
];

const personagens = [
  {
    // img: require("@/assets/images/luffy.png"),
    nome: "Monkey D. Luffy",
    faccao: "Piratas do Chapéu de Palha",
    fruta: "Hito Hito no Mi, Modelo Nika",
    vida: 100,
    forca: 98,
    velocidade: 95,
    inteligencia: 80,
    recompensa: "3.000.000.000",
    raridade: "⭐⭐⭐⭐⭐",
  },
  {
    // img: require("@/assets/images/kaido.png"),
    nome: "Kaido",
    faccao: "Piratas das Feras",
    fruta: "Uo Uo no Mi",
    vida: 100,
    forca: 100,
    velocidade: 85,
    inteligencia: 88,
    recompensa: "4.611.100.000",
    raridade: "⭐⭐⭐⭐⭐",
  },
  {
    // img: require("@/assets/images/moria.png"),
    nome: "Gecko Moria",
    faccao: "Piratas Thriller Bark",
    fruta: "Kage Kage no Mi",
    vida: 80,
    forca: 75,
    velocidade: 60,
    inteligencia: 82,
    recompensa: "320.000.000",
    raridade: "⭐⭐⭐",
  },
  {
    // img: require("@/assets/images/sabo.png"),
    nome: "Sabo",
    faccao: "Exército Revolucionário",
    fruta: "Mera Mera no Mi",
    vida: 90,
    forca: 92,
    velocidade: 90,
    inteligencia: 87,
    recompensa: "Desconhecida",
    raridade: "⭐⭐⭐⭐",
  },
  {
    // img: require("@/assets/images/garp.png"),
    nome: "Monkey D. Garp",
    faccao: "Marinha",
    fruta: "Nenhuma",
    vida: 99,
    forca: 99,
    velocidade: 85,
    inteligencia: 90,
    recompensa: "Marinha",
    raridade: "⭐⭐⭐⭐⭐",
  },
];

export default function AkumaNoMi() {
  const [mensagem, setMensagem] = useState("");
  const [personagemSorteado, setPersonagemSorteado] = useState(null);

  async function buscarProfecia() {
    try {
      const response = await fetch(
        "https://api.adviceslip.com/advice"
      );

      const data = await response.json();

      setMensagem(data.slip.advice);
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível conectar à API."
      );
    }
  }

  function sortearPersonagem() {
    const sorteado =
      personagens[
        Math.floor(Math.random() * personagens.length)
      ];

    setPersonagemSorteado(sorteado);
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={Banner} style={styles.banner} />

      <Text style={styles.titulo}>
        🍎 AKUMA NO MI EXPLORER
      </Text>

      <Text style={styles.subtitulo}>
        Descubra as frutas mais poderosas de One Piece!
      </Text>

      <FlatList
        data={frutas}
        numColumns={2}
        scrollEnabled={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>
              🍎 {item.nome}
            </Text>

            <Text style={styles.usuario}>
              👤 {item.usuario}
            </Text>

            <Text style={styles.descricao}>
              {item.poder}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={sortearPersonagem}
      >
        <Text style={styles.botaoTexto}>
          🎴 Sortear Personagem Lendário
        </Text>
      </TouchableOpacity>

      {personagemSorteado && (
        <View style={styles.carta}>
          {/*
          <Image
            source={personagemSorteado.img}
            style={styles.foto}
          />
          */}

          <Text style={styles.nomeCarta}>
            ⚔️ {personagemSorteado.nome}
          </Text>

          <Text style={styles.info}>
            🏴 Facção: {personagemSorteado.faccao}
          </Text>

          <Text style={styles.info}>
            🍎 Fruta: {personagemSorteado.fruta}
          </Text>

          <Text style={styles.info}>
            🌟 Raridade: {personagemSorteado.raridade}
          </Text>

          <Text style={styles.info}>
            ❤️ Vida: {personagemSorteado.vida}/100
          </Text>

          <Text style={styles.info}>
            💪 Força: {personagemSorteado.forca}/100
          </Text>

          <Text style={styles.info}>
            ⚡ Velocidade: {personagemSorteado.velocidade}/100
          </Text>

          <Text style={styles.info}>
            🧠 Inteligência: {personagemSorteado.inteligencia}/100
          </Text>

          <Text style={styles.info}>
            💰 Recompensa: ฿ {personagemSorteado.recompensa}
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.botao}
        onPress={buscarProfecia}
      >
        <Text style={styles.botaoTexto}>
          ☠️ Descobrir Profecia Pirata
        </Text>
      </TouchableOpacity>

      {mensagem !== "" && (
        <View style={styles.caixaMensagem}>
          <Text style={styles.resultadoTitulo}>
            🔮 Profecia Pirata
          </Text>

          <Text style={styles.mensagem}>
            "{mensagem}"
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9cfa8c4",
  },

  banner: {
    width: "100%",
    height: 180,
    borderBottomWidth: 5,
    borderColor: "#d2a62c",
  },

  titulo: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#b8860b",
    marginTop: 10,
  },

  subtitulo: {
    textAlign: "center",
    color: "#5a3d00",
    marginBottom: 10,
  },

  card: {
    width: "48%",
    margin: "1%",
    backgroundColor: "#fff4d6",
    borderRadius: 12,
    padding: 10,
    borderWidth: 2,
    borderColor: "#d2a62c",
    minHeight: 180,
  },

  nome: {
    fontWeight: "bold",
    color: "#b8860b",
    textAlign: "center",
    fontSize: 14,
  },

  usuario: {
    textAlign: "center",
    color: "#444",
    fontSize: 12,
    marginTop: 5,
  },

  descricao: {
    textAlign: "center",
    color: "#5a3d00",
    fontSize: 12,
    marginTop: 8,
  },

  botao: {
    backgroundColor: "#e3aa25",
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 15,
    borderRadius: 12,
  },

  botaoTexto: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  carta: {
    backgroundColor: "#fff4d6",
    margin: 15,
    padding: 20,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#d2a62c",
  },

  foto: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },

  nomeCarta: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#b8860b",
    marginBottom: 15,
  },

  info: {
    fontSize: 15,
    color: "#5a3d00",
    marginVertical: 4,
  },

  caixaMensagem: {
    backgroundColor: "#fff4d6",
    marginHorizontal: 15,
    marginBottom: 20,
    padding: 15,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#d2a62c",
  },

  resultadoTitulo: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#b8860b",
    marginBottom: 10,
  },

  mensagem: {
    textAlign: "center",
    color: "#5a3d00",
    fontStyle: "italic",
  },
});