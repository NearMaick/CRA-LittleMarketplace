import { Button, Text, Box, Image, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

type ItemProps = {
  id: string
  title: string
  url: string
  text: string
  price: number
}

export function Item({ title, url, price, id }: ItemProps) {
  const priceConverted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)

  return (
    <Box
      width="100%"
      height="100%"
      maxWidth={360}
      bg="gray.800"
      p="8"
      borderRadius={8}
      flexDir="column"
      align="center"
    >
      <Center h="36" alignItems="center" justifyContent="center">
        <Image w="24" borderRadius="4" src={url} />
      </Center>
      <Text mt="4">{title}</Text>
      <Text>{priceConverted}</Text>

      <Link to={`/product/${id}`}>
        <Button mt="6" colorScheme="green" size="lg">
          Comprar
        </Button>
      </Link>
    </Box>
  )
}
