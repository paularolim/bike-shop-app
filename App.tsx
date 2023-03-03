import { Box, NativeBaseProvider } from 'native-base';
import { Home } from './src/screens/Home';
import { theme } from './src/styles/theme';

export function App(): JSX.Element {
  return (
    <NativeBaseProvider theme={theme}>
      <Box flex={1} bg={theme.colors.primary[100]}>
        <Home />
      </Box>
    </NativeBaseProvider>
  );
}
