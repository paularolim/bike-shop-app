import { Box, FlatList } from 'native-base';
import { useCallback, useEffect, useState } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { Card } from '../../components/Card';
import { httpClient } from '../../services/HttpClient';

import { Detail } from './components/Detail';
import { MainBanner } from './components/MainBanner';
import { Equipment } from './types';

export function Home() {
  const [equipments, setEquipments] = useState<Equipment[]>([]);

  const Header = useCallback(() => <MainBanner />, []);
  const Separator = useCallback(() => <Box h="16px" />, []);
  const RenderItem = useCallback(
    ({ item }: ListRenderItemInfo<Equipment>) => <Card {...item} />,
    [],
  );

  useEffect(() => {
    async function getEquipments() {
      try {
        const { data } = await httpClient.get('/equipments');
        setEquipments(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error', error);
      }
    }
    getEquipments();
  }, []);

  return (
    <Box flex={1} paddingX="24px" position="relative">
      <Detail />

      <FlatList
        key="flatlist"
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={equipments}
        renderItem={RenderItem}
        ListHeaderComponent={Header}
        ItemSeparatorComponent={Separator}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
}
