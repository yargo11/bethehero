import { Flex, Icon, Text } from '@chakra-ui/react'
import { FiTrash2 } from 'react-icons/fi'

interface CasosProps {
    caso: string;
    descricao: string;
    valor: number
}

export default function Casos(props: CasosProps) {
    return (
        <Flex direction='column' maxW='543px' h='314px' borderRadius='8px' bg='#ffffff' p='32px' position='relative'>
            <Icon as={FiTrash2} position='absolute' top='24px' right='24px' color='#A8A8B3' />
            <Text as='h6'> CASO:</Text>
            <Text as='h4' mt='12px'>{props.caso}</Text>
            <Text as='h6' mt='26px'>Descrição</Text>
            <Text as='h4' mt='12px' lineHeight='24px'>{props.descricao}</Text>
            <Text as='h6' mt='26px'>VALOR:</Text>
            <Text as='h4' mt='12px'>R$ {props.valor} reais</Text>
        </Flex>
    )
}