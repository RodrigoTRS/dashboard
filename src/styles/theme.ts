import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#181823",
            "800": "#1F2029",
            "700": "#353646",
            "600": "#4B4D63",
            "500": "#6164D63",
            "400": "#797D9A",
            "300": "#969998",
            "200": "#8385C6",
            "100": "#D1D0DC",
            "50": "#EEEEF2"
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }
})