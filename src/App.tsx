import { ChakraProvider, theme } from '@chakra-ui/react'
import { Header } from './components/Header'
import { ShopWindow } from './components/ShopWindow'
import { ProductsProvider } from './contexts/ProductsContext'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ProductsProvider>
        <Header />
        <ShopWindow />
      </ProductsProvider>
    </ChakraProvider>
  )
}

export default App
