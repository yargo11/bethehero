import { FormEvent } from 'react'

import { Input } from '@chakra-ui/react'

interface MyInputProps {
    value: string | number;
    name: string;
    marginTop?: string;
    customW?: string;
    bSize?: string;
    onChangeEvent: (FormEvent) => void;
}

export default function MyInput(props: MyInputProps) {

    return (
        <Input
            placeholder={props.name}
            w='100%'
            value={props.value}
            maxW={props.customW ? props.customW : '448px'}
            mt={props.marginTop}
            h='60px'
            zIndex='4'
            bg='#fff'
            borderWidth='1.5px'
            borderColor='#dcdce5'
            borderRadius='8px'
            onChange={props.onChangeEvent}
        />
    )

}