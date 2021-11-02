import { SimpleGrid } from '@chakra-ui/react'
import { useContext } from 'react'

import { Item } from '../components/Item'
import { ProductsContext } from '../contexts/ProductsContext'

type DataProps = {
  id: string
  title: string
  url: string
  text: string
  price: number
}

export function ShopWindow() {
  const products = useContext<DataProps[]>(ProductsContext)

  return (
    <SimpleGrid p="4" flex="1" gap="4" minChildWidth="320px">
      {products.map((product: DataProps) => (
        <Item
          key={product.id}
          id={product.id}
          title={product.title}
          url={product.url}
          text={product.text}
          price={product.price}
        />
      ))}
    </SimpleGrid>
  )
}
