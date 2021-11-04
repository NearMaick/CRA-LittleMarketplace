import { ChakraProvider, theme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { ProductsProvider } from './contexts/ProductsContext'
import { Routes } from './routes'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ProductsProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ProductsProvider>
    </ChakraProvider>
  )
}

export default App
