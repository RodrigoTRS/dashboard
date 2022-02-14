import { Flex, HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationsNav() {
    return (
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
    );
}