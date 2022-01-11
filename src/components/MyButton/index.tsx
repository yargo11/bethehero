import { Button, Link } from '@chakra-ui/react'

interface MyButtonProp {
    value: string
    marginTop?: string;
    customW?: string;
    anchor?: string;
    tipo?: string;
}

export default function MyButton(props: MyButtonProp) {
    return (
        <Button
            maxW={props.customW}
            mt={props.marginTop}
            w='100%'
            bg='#e02041'
            color='#f0f0f5'
            borderRadius='8px'
            h='60px'
            _hover={{
                bg: 'red.500'
            }}
            as={Link}
            href={props.anchor}

        >{props.value}</Button>
    )
}