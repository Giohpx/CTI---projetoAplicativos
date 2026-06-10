import { useState } from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  FlatList,
  Platform,
  Pressable,
  Image,
} from 'react-native';

type Props = {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  // Removi a parte do /Users/.../Downloads/ e deixei apenas o nome do arquivo
  const [emoji] = useState<ImageSourcePropType[]>([
    require("../assets/images/vecteezy_crying-banana-cat-meme-sticker-tshirt-illustration_44876780.png"),
    require("../assets/images/vecteezy_throw-up-cat-meme-sticker-tshirt-illustration_44876751.png"),
    require("../assets/images/vecteezy_scream-cat-meme-sticker-tshirt-illustration_44876733.png"),
    require("../assets/images/vecteezy_sleepy-drooling-cat-meme-sticker-tshirt-illustration_44876750.png"),
    require("../assets/images/vecteezy_drunk-cat-meme-sticker-tshirt-illustration_44876753.png"),
    require("../assets/images/vecteezy_cat-with-glasses-meme-sticker-tshirt-illustration_44876360.png"),
  ]);

  return (
    <FlatList
      horizontal
      data={emoji}
      keyExtractor={(_, index) => index.toString()}
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            console.log("Clicou na imagem", index);
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
    borderWidth: 1,
  },
});