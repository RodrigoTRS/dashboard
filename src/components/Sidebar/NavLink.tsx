import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
    linkUrl: string;
}

export function NavLink({icon, children, linkUrl, ...rest}: NavLinkProps) {
    return (
        <Link display="flex" alignItems="center" href={linkUrl} {...rest}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">{children}</Text>
        </Link>
    );
}