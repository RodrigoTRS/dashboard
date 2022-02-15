import { Box, Button, Flex, Heading, Icon, Table, Th, Thead, Tr, Checkbox, Tbody, Td, Text, useBreakpointValue, Spinner } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header/index";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";


export default function UserList() {

    const [page, setPage] = useState(1)

    const { data, isLoading, isFetching, error } = useUsers(page);

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

                            { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" /> }
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

                    { isLoading ? (
                        <Flex
                        align="center"
                        justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex
                        align="center"
                        justify="center">
                            <Text>Falha ao obter dados dos usuários</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme="whiteAlpha">
                                                    
                                <Thead>
                                    <Tr bg="gray.900">
                                        <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                            <Checkbox colorScheme="pink" />
                                        </Th>
                                        <Th>Usuário</Th>
                                        { isWideVersion && <Th>Data de cadastro</Th> }
                                        <Th width="0"></Th>
                                    </Tr>
                                </Thead>

                                <Tbody>

                                    {data.users.map(user => {
                                        return (
                                        <Tr key={user.id}>
                                            <Td  px={["4", "4", "6"]}>
                                                <Checkbox colorScheme="pink" />
                                            </Td>
                                            <Td>
                                                <Box>
                                                    <Text fontWeight="bold">{user.name}</Text>
                                                    <Text fontSize="sm" color="gray.300">{user.email}</Text>
                                                </Box>
                                            </Td>
                                            { isWideVersion && <Td>{user.createdAt}</Td> }
                                            <Td>
                                                { isWideVersion && <Button
                                                as="a"
                                                size="sm"
                                                fontSize="sm"
                                                colorScheme="purple"
                                                leftIcon={<Icon as={RiPencilLine}/>}>
                                                    Editar
                                                </Button>} 
                                            </Td>
                                        </Tr>
                                    )
                                })}
                                </Tbody>
                            </Table>
                            <Pagination
                                totalCountOfRegisters={data.totalCount}
                                currentPage={page}
                                onPageChange={setPage}
                            />
                        </>
                        )}

                </Box>

            </Flex>

        </Box>

    )

}