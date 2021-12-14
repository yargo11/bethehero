import { Button } from '@chakra-ui/react'

interface MyButtonProp {
    value: string
    marginTop?: string;
    customW?: string
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
                bg:'red.500'
            }}
        >{props.value}</Button>
    )
}