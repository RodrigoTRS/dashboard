import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { PaginationButton } from "./PaginationButton";

interface PaginationProps {
    totalCountOfRegisters: number;
    registersPerPage?: number;
    currentPage?: number,
    onPageChange: (page:number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)].map((_, index) => {
        return from + index + 1;
    }).filter(page => page > 0)
}

export function Pagination({totalCountOfRegisters, registersPerPage = 10, currentPage = 1, onPageChange}:PaginationProps) {
    
    const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);
    
    const previousPages = currentPage > 1
        ? generatePagesArray(currentPage-1-siblingsCount, currentPage-1)
        : []

        const nextPages = currentPage < lastPage
        ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
        : []


    const firstPageReg = (currentPage*10)-9

    return (
        <Stack
            direction={{base: "column", md: "row"}}
            mt="8"
            justify="space-between"
            align="center"
            spacing="6"
        >

            <Box>
                <strong>{firstPageReg}</strong> - <strong>{firstPageReg+9}</strong> de <strong>{totalCountOfRegisters}</strong>
            </Box>

            <Stack direction="row" spacing="2">

                {currentPage > (1 + siblingsCount) && (
                    <PaginationButton onPageChange={onPageChange} number={1} />
                )}

                {currentPage > 3 && (
                    <Text>...</Text>
                )}

                {previousPages.length > 0 && previousPages.map(page => {
                    return <PaginationButton onPageChange={onPageChange} key={page} number={page} />
                })}

                <PaginationButton onPageChange={onPageChange} number={currentPage} isCurrent={true} />

                {nextPages.length > 0 && nextPages.map(page => {
                    return <PaginationButton onPageChange={onPageChange} key={page} number={page} />
                })}

                {currentPage < (lastPage-2) && (
                    <Text>...</Text>
                )}

                {(currentPage + siblingsCount) < lastPage && (
                    <PaginationButton onPageChange={onPageChange} number={lastPage} />
                )}

            </Stack>

        </Stack>
    )
}