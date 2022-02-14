import { Box, Button, Divider, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from '../../components/Form/Input'
import { Header } from "../../components/Header/index";
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
                px="6"
                >
                    
                <Sidebar />

                <Box
                  flex="1"
                  borderRadius="8"
                  bg="gray.800"
                  p="8"
                  boxShadow="0 4px 6px 2px #13131b2d"
                  border="1px solid"
                  borderColor="gray.700">

                    <Heading size="md" fontWeight="normal"> Criar usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <Stack spacing={["4", "4", "8"]} direction={{base: "column", md: "row"}}>

                        <SimpleGrid minChildWidth="248" spacing={["4", "4", "8"]} width="100%">
                            <Input name="name" label="Nome"/>
                            <Input name="email" type="email" label="E-mail"/>
                        </SimpleGrid>
                        

                        <SimpleGrid minChildWidth="248" spacing={["4", "4", "8"]} width="100%">
                            <Input name="password" type="password" label="Senha"/>
                            <Input name="password-confirmation" type="password" label="Confirmar senha"/>
                        </SimpleGrid>

                    </Stack>

                    <Flex mt="8" justify="flex-end">
                        <Stack spacing="2" direction="row">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha" size="sm">Cancelar</Button>
                            </Link>
                            <Button colorScheme="pink" size="sm">Salvar</Button>
                        </Stack>
                    </Flex>

                </Box>

            </Flex>

        </Box>

    )

}