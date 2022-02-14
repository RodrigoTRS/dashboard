import { Flex, HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationsNav() {
    return (
        <Flex
        align="center"
        ml="auto"
    >
        <HStack
          spacing={["4", "4", "6", "8"]}
          mx={["4", "4", "6", "8"]}
          pr={["4", "4", "6", "8"]}
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