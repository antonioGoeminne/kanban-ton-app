import { MantineProvider } from '@mantine/core';
import { LayoutWrapper } from './components/LayoutWrapper';

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        colors: {
          brand: ['#FFA22B'], 
          toDo: ['#E2FD72'],
          doing: ['#72FBFD'],
          done: ['#8FFD72'],
          dark: [
            '#F1F4FB',
            '#A6A7AB',
            '#909296',
            '#5C5F66',
            '#373A40',
            '#2C2E33',
            '#25262B',
            '#1A1B1E',
            '#141517',
            '#101113',
          ],
        },
        primaryColor: 'brand',
        shadows: {
          md: '1px 1px 3px rgba(0, 0, 0, .25)',
          xl: '5px 5px 3px rgba(0, 0, 0, .25)',
        }
      }}
    >
      <LayoutWrapper />
    </MantineProvider>
  )
}

export default App;
