import { Avatar, Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

export function Profile() {
    const isWideVersion = useBreakpointValue({ base: false, md: true})

    if(isWideVersion) {
        return (
            <Flex align="center" as="a" href="/profile">
                <Box mr={["0", "0", "2", "4"]} textAlign="right">
                    <Text fontSize="sm">Rodrigo Teixeira</Text>
                    <Text
                    color="gray.300"
                    fontSize="smaller"
                    >
                        rodrigoteix1998@gmail.com
                    </Text>
                </Box>
    
                <Avatar size="sm" name="Rodrigo Teixeira"/>
    
            </Flex>
        );
    } else {

        return (
            <Flex align="center" as="a" href="/profile">
                <Box mr={["0", "0", "2", "4"]} textAlign="right">
                </Box>

                <Avatar size="sm" name="Rodrigo Teixeira"/>

            </Flex>
        );
    }
}