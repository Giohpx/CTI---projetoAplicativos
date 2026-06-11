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
    require("../assets/images/37-375472_transparent-one-piece-png-one-piece-chopper-stickers-removebg-preview.png"),
    require("../assets/images/adesivo_sticker_vinil_impermeavel_one_piece_luffy_1545_2_d706c3df5c66b82a24e11f8abc8333d4-removebg-preview.png"),
    require("../assets/images/image-removebg-preview (2).png"),
    require("../assets/images/image-removebg-preview (1).png"),
    require("../assets/images/images-removebg-preview.png"),
    require("../assets/images/37-375472_transparent-one-piece-png-one-piece-chopper-stickers-removebg-preview.png"),
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