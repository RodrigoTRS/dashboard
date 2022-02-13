import { Flex, Input, Text, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiSearchLine, RiUserAddLine, RiNotificationLine } from 'react-icons/ri'

export function Header() {
    return (
        <Flex
          as="header"
          w="100%"
          maxWidth="1400"
          h="20"
          mx="auto"
          mt="4"
          px="6"
          align="center">

            <Text /* Logo */
              fontSize="3xl"
              fontWeight="bold"
              letterSpacing="tight"
              w="48">dashgo<Text
              as="span"
              color="pink.500">.</Text>
            </Text>

            <Flex /* Search bar */
              as="label"
              flex="1"
              py="4"
              px="8"
              ml="6"
              maxW="400"
              align="center"
              color="gray.200"
              position="relative"
              bg="gray.800"
              borderRadius="full">

                <Input
                  color="gray=50"
                  variant="unstyled"
                  placeholder="Buscar na plataforma"
                  _placeholder={{
                  color:
                  'gray.400'}}
                  px="4"
                  mr="4">
                </Input>

                <Icon as={RiSearchLine} fontSize="xl" />
                
            </Flex>

            <Flex
                align="center"
                ml="auto"
            >
                <HStack
                  spacing="8"
                  mx="8"
                  pr="8"
                  py="1"
                  color="gray.300"
                  borderRightWidth={1}
                  borderColor="gray.700">

                    <Icon as={RiNotificationLine} fontSize="xl"></Icon>
                    <Icon as={RiUserAddLine} fontSize="xl"></Icon>

                </HStack>
            </Flex>

            <Flex align="center">
                <Box mr="4" textAlign="right">
                    <Text>Rodrigo Teixeira</Text>
                    <Text
                      color="gray.300"
                      fontSize="small">
                        rodrigoteix1998@gmail.com
                    </Text>
                </Box>

                <Avatar size="md" name="Rodrigo Teixeira"/>

            </Flex>

        </Flex>
    )
}