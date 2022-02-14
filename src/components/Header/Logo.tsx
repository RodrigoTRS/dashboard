import { Text } from '@chakra-ui/react'

export function Logo() {
    return (
        <Text as="a" /* Logo */
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        w="32"
        href="/dashboard">
        dashgo
        <Text
        as="span"
        color="pink.500">
        .
        </Text>
      </Text>
    );
}