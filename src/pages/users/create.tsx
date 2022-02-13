import { Box, Button, Divider, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { Input } from '../../components/Form/Input'
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
    return (

        <Box>

            <Header />

            <Flex
                w="100%"
                my="6"
                maxWidth="1400"
                mx="auto"
                px="6">
                    
                <Sidebar />

                <Box flex="1" borderRadius="8" bg="gray.800" p="8">

                    <Heading size="lg" fontWeight="normal"> Criar usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <Stack spacing="8" direction="row">

                        <SimpleGrid minChildWidth="248" spacing="8" width="100%">
                            <Input name="name" label="Nome"/>
                            <Input name="email" type="email" label="E-mail"/>
                        </SimpleGrid>
                        

                        <SimpleGrid minChildWidth="248" spacing="8" width="100%">
                            <Input name="password" type="password" label="Senha"/>
                            <Input name="password-confirmation" type="password" label="Confirmar senha"/>
                        </SimpleGrid>

                    </Stack>

                    <Flex mt="8" justify="flex-end">
                        <Stack spacing="2" direction="row">
                            <Button as="a" colorScheme="whiteAlpha" size="sm" href="/users">Cancelar</Button>
                            <Button colorScheme="pink" size="sm">Salvar</Button>
                        </Stack>
                    </Flex>

                </Box>

            </Flex>

        </Box>

    )

}