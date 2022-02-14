import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function Search() {
    return (
        <Flex /* Search bar */
        as="label"
        flex="1"
        py="3"
        px="8"
        ml="6"
        maxW="400"
        align="center"
        color="gray.200"
        position="relative"
        bg="gray.700"
        boxShadow="0 4px 6px 2px #13131b2d"
        border="1px solid"
        borderColor="gray.600"
        borderRadius="full"
        _hover={{
            borderColor: "gray.500"
        }}
        _pressed={{
            borderColor: "gray.500"
        }}>

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
    );
}