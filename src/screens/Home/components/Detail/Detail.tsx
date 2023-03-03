import { Image } from 'native-base';

import detail from '../../../../assets/images/detail.png';

export function Detail() {
  return (
    <Image
      source={detail}
      alt="detail of home"
      position="absolute"
      bottom={0}
      right={0}
    />
  );
}
