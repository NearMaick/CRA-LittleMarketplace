import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Box, Flex, Image, Heading, Text, Button, Link } from '@chakra-ui/react'

import { Header } from '../components/Header'

type ProductProps = {
  id: string
  title: string
  url: string
  text: string
  price: any
}

export function Product() {
  const [product, setProduct] = useState<ProductProps>()

  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:3333/products/${id}`)
      .then(response => response.json())
      .then(json => setProduct(json))
  }, [id])

  const textConverted = product?.text.replace(/ /g, '%20')
  const priceConverted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product?.price)

  return (
    <Box>
      <Header />

      <Flex direction="column" w="80vw" margin="auto" alignItems="center">
        <Image objectFit="cover" w="80vw" h={500} src={product?.url} />
        <Heading fontSize="5xl" mt="4">
          {product?.title}
        </Heading>
        <Text fontSize="2xl" mt="4">
          {product?.text}
        </Text>
        <Text fontSize="xl">{priceConverted}</Text>
        <Link
          href={`https://api.whatsapp.com/send?l=pt-BR&phone=${process.env.REACT_APP_WHATSAPP_NUMBER}&text=${textConverted}`}
          isExternal
        >
          <Button mt="6" colorScheme="green" size="lg">
            Comprar
          </Button>
        </Link>
      </Flex>
    </Box>
  )
}
