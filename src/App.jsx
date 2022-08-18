import { MantineProvider, Text } from '@mantine/core';
import SplitButton from './components/Boton';
import ActionsGrid from './components/Card';


export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Mantine!</Text>
      <ActionsGrid/>
      <SplitButton/>
      
     
    </MantineProvider>
  );
}
