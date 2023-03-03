import { Box, Image } from 'native-base';
import { ImageBackground } from 'react-native';

import slider from '../../../../assets/images/slider.png';
import bike from '../../../../assets/images/bike.png';

export function MainBanner() {
  return (
    <Box w="100%" h="300">
      <ImageBackground
        source={slider}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        resizeMode="contain"
      >
        <Image source={bike} alt="image of an bike" />
      </ImageBackground>
    </Box>
  );
}
