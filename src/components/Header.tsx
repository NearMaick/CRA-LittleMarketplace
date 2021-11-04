import { Heading, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ColorModeSwitcher } from './ColorModeSwitcher'

export function Header() {
  return (
    <Flex
      as="header"
      w="95%"
      maxWidth={1920}
      p="4"
      marginX="12"
      marginY="4"
      alignItems="center"
      justifyContent="space-between"
      flexDir={{ base: 'column', md: 'row' }}
    >
      <Heading
        as="h1"
        fontSize={{ base: 'sm', sm: '2xl', md: '3xl', lg: '5xl' }}
        fontWeight="bold"
        letterSpacing="tight"
      >
        <Link to="/">Nildinha Personalizados</Link>
      </Heading>
      <ColorModeSwitcher />
    </Flex>
  )
}
