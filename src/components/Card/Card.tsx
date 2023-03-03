import { Box, Image, Text } from 'native-base';
import { TouchableOpacity, Dimensions } from 'react-native';
import { CardProps } from './types';

const screenMargin = 24 * 2;
const separator = 16;
const width = (Dimensions.get('window').width - screenMargin - separator) / 2;

export function Card({
  title,
  model,
  price,
  image,
  onPress = () => {},
}: CardProps) {
  return (
    <TouchableOpacity style={{ width, height: 240 }} onPress={onPress}>
      <Box
        borderRadius="24px"
        flex={1}
        shadow={5}
        bg="primary.50:alpha.80"
        justifyContent="center"
        alignItems="center"
      >
        <Image source={{ uri: image }} w="121px" h="80px" alt="product image" />
        <Box w="100%" p="16px">
          <Text fontSize="sm" fontWeight={500} color="white:alpha.60">
            {title}
          </Text>
          <Text fontSize="md" fontWeight={700} color="white">
            {model}
          </Text>
          <Text fontSize="sm" fontWeight={500} color="white:alpha.60">
            $ {price}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}
