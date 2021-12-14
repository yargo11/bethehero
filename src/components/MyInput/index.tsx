import { useRef, useState } from 'react'

import { Input, Text, Box } from '@chakra-ui/react'

interface MyInputProps {
    value: string;
    marginTop?: string;
    customW?: string
}

export default function MyInput(props: MyInputProps) {

    const [value, setValue] = useState('');
    // const refValue = useRef()

    const handleChange = (event) => setValue(event.target.value)

    return (

        <Input
            placeholder={props.value}
            w={props.customW ? props.customW : '448px'}
            mt={props.marginTop}
            h='60px'
            zIndex='4'
            bg='#fff'
            borderWidth='1.5px'
            borderColor='#dcdce5'
            borderRadius='8px'
            onChange={handleChange}
        />
    )

}