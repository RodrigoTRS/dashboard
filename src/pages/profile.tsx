import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header/index";
import { Sidebar } from "../components/Sidebar";

export default function Profile() {
    return (
    <>
        <Head>
            <title>Dashgo. | Profile</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        <Flex
            w="100%"
            my="6"
            maxW="1400"
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
                borderColor="gray.700"
            >

                <Heading size="md" fontWeight="normal">Perfil</Heading>
                <Divider my="6" borderColor="gray.700" />
                
            </Box>

        </Flex>
    </>
    )
}