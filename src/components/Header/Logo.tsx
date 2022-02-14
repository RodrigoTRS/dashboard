import { Text } from '@chakra-ui/react'

export function Logo() {
    return (
        <Text as="a" /* Logo */
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="48"
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