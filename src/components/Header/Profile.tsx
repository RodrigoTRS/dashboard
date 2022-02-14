import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center" as="a" href="/profile">
            <Box mr="4" textAlign="right">
                <Text fontSize="sm">Rodrigo Teixeira</Text>
                <Text
                color="gray.300"
                fontSize="smaller">
                    rodrigoteix1998@gmail.com
                </Text>
            </Box>

            <Avatar size="sm" name="Rodrigo Teixeira"/>

        </Flex>
    );
}