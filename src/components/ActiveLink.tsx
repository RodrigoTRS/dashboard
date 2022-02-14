import Link, {LinkProps} from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";


interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExactHref?: boolean;
}

export function ActiveLink({children, shouldMatchExactHref = false, ...rest}: ActiveLinkProps) {

    const { asPath } = useRouter()

    let isActive = false;

    if (shouldMatchExactHref && (asPath == rest.href || asPath == rest.as)) {
        isActive = true;
    }

    if (!shouldMatchExactHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))) {
        isActive = true;
    }

    return (
        <Link {...rest}>
            {cloneElement(children, {
                bg: isActive ? 'pink.500' : 'gray.900',
                color: isActive ? 'gray.900' : 'gray.50'
            })}
        </Link>
    );
}