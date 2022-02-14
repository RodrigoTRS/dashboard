import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { Header } from "../components/Header/index";
import { Sidebar } from "../components/Sidebar";

export default function Profile() {
    return (
    <>
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