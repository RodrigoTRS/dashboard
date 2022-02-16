import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react"
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContenxt'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { Search } from './Search'

export function Header() {

    const { onOpen } = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
          as="header"
          w="100%"
          maxWidth="1400"
          h="20"
          mx="auto"
          mt="4"
          px="6"
          align="center"
        >

            { !isWideVersion && (
                <IconButton
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    textAlign="center"
                    lineHeight="3"
                    mr="4"
                >

                </IconButton>
            )}
            <Logo />
            <Search />
            <NotificationsNav />
            <Profile />
        </Flex>
    )
}