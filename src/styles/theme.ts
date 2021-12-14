import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: '#E5E5E5',
                // bg: 'gray.900',
                // color: 'green.500'
            },
            h1: {
                fontSize: ['28px', '32px', '36px'],
                fontWeight: '500',
                color: '#13131A'
            },
            h3: {
                fontSize: ['16px', '18px', '20px'],
                fontWeight: '400',
                color: '#13131A'
            },
            h4: {
                fontSize: ['14px', '16px', '18px'],
                fontWeight:'400',
                color:'#737380'
            },
            h5: {
                fontSize: ['18px', '16px', '14px'],
                fontWeight: '400'
            },
            h6: {
                fontSize: '16px',
                fontWeight: '700',
                color: '#41414D'
            }
        }
    }
})