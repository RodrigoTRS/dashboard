import { Box, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
    return (
        <Box as="aside" w="48" mr="8">

            <Stack spacing="12" align="flex-start">

                <NavSection title="GERAL">
                    <NavLink linkUrl="/dashboard" icon={RiDashboardLine}>Dashboard</NavLink>
                    <NavLink linkUrl="/users" icon={RiContactsLine}>Usuários</NavLink>
                </NavSection>

                <NavSection title="AUTOMAÇÃO">
                    <NavLink linkUrl="/" icon={RiInputMethodLine}>Formulários</NavLink>
                    <NavLink linkUrl="/" icon={RiGitMergeLine}>Automação</NavLink>
                </NavSection>

            </Stack>

        </Box>
    );
}