import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function Home() {
  return (

    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >

      <Flex
        as="form"
        w="110%"
        maxW="400"
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDir="column"
        border="1px solid"
        borderColor="gray.700"
      >

        <Stack spacing="4">

          <Input name="email" type="email" label="E-mail" />

          <Input name="password" type="password" label="Senha" />

          <Button type="submit" mt="6" colorScheme="pink">Entrar</Button>

        </Stack>

      </Flex>

    </Flex>
  )
}
