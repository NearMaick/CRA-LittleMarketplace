import { Heading, Flex } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'

export function Header() {
  return (
    <Flex
      as="header"
      w="95vw"
      p="4"
      marginX="12"
      marginY="4"
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading
        as="h1"
        fontSize={{ base: 'sm', sm: '2xl', md: '3xl', lg: '5xl' }}
      >
        NearMaick.dev.br
      </Heading>
      <ColorModeSwitcher />
    </Flex>
  )
}
