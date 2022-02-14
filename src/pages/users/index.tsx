import { Box, Button, Flex, Heading, Icon, Table, Th, Thead, Tr, Checkbox, Tbody, Td, Text, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header/index";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {

    const isWideVersion = useBreakpointValue({
        base: false,
        md: true
    })

    return (

        <Box>
            <Head>
                <title>Dashgo. | Users</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Header />

            <Flex
                w="100%"
                my="6"
                maxWidth="1400"
                mx="auto"
                px="6">
                    
                <Sidebar />

                <Box
                    flex="1"
                    borderRadius="8"
                    bg="gray.800"
                    p="8"
                    boxShadow="0 4px 6px 2px #13131b2d"
                    border="1px solid"
                    borderColor="gray.700">

                    <Flex
                    mb="8"
                    justify="space-between"
                    align="center">

                        <Heading
                        size="md"
                        fontWeight="normal">
                            Usuários
                        </Heading>

                        <Link href="/users/create" passHref>
                            <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine}/>}
                            >
                                Criar novo
                            </Button>
                        </Link>

                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        
                        <Thead>
                            <Tr bg="#181823">
                                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>Usuário</Th>
                                { isWideVersion && <Th>Data de cadastro</Th> }
                                <Th width="0"></Th>
                            </Tr>
                        </Thead>

                        <Tbody>

                            <Tr>
                                <Td  px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Rodrigo Teixeira</Text>
                                        <Text fontSize="sm" color="gray.300">rodrigoteix1998@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>03 de Abril de 2021</Td> }
                                <Td>
                                    {isWideVersion && <Button
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="purple"
                                    leftIcon={<Icon as={RiPencilLine}/>}>
                                        Editar
                                    </Button>} 
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Rodrigo Teixeira</Text>
                                        <Text fontSize="sm" color="gray.300">rodrigoteix1998@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>03 de Abril de 2021</Td> }
                                <Td>
                                    { isWideVersion && <Button
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="purple"
                                    leftIcon={<Icon as={RiPencilLine}/>}>
                                        Editar
                                    </Button> }
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Rodrigo Teixeira</Text>
                                        <Text fontSize="sm" color="gray.300">rodrigoteix1998@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>03 de Abril de 2021</Td> }
                                <Td>
                                    {isWideVersion && <Button
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="purple"
                                    leftIcon={<Icon as={RiPencilLine}/>}>
                                        Editar
                                    </Button>} 
                                </Td>
                            </Tr>

                        </Tbody>

                    </Table>

                    <Pagination />

                </Box>

            </Flex>

        </Box>

    )

}