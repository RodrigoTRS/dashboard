import { Flex, Icon, Input, useBreakpointValue } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

export function Search() {

  const searchInputRef = useRef<HTMLInputElement>(null) 
  
  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  });

  if (isMobile) {
    return (
    null
    );
  };

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
    bg="gray.800"
    
    border="1px solid"
    borderColor="gray.600"
    borderRadius="full"
    _hover={{
        borderColor: "gray.500"
    }}
    _pressed={{
        borderColor: "gray.500"
    }}
    >

      <Input
        color="gray=50"
        variant="unstyled"
        placeholder="Buscar..."
        _placeholder={{
        color:
        'gray.400'}}
        px="0"
        mr="4"
        ref={searchInputRef}>

      </Input>

      <Icon as={RiSearchLine} fontSize="xl" />
        
    </Flex>
  );
}