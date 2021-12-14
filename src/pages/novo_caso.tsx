import { Center, Box, Flex, Image, Text, Icon, Link, Textarea, Spacer, Button } from '@chakra-ui/react'

import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'

import { FiArrowLeft } from 'react-icons/fi'

export default function NovoCaso() {
    return (
        <Center w='full' h='100vh'>
            <Flex w='1120px' h='577px' bg='#F0F0F5' p='100px' boxShadow='0px 0px 100px rgba(0, 0, 0, 0.1)' borderRadius='8px'>
                <Flex direction='column' alignSelf='center' align='start'>
                    <Image src='/Logo.png' alt='Be the Hero' w='191px' />
                    <Text as='h1' mt='64px'>
                        Cadastrar novo caso
                    </Text>

                    <Text as='h5' color='#737380' mt='32px' maxW='384px'>
                        Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </Text>

                    <Link href='/' mt='84px'>
                        <Flex align='center' >
                            <Icon as={FiArrowLeft} color='#e02041' mr='20px' />
                            <Text as='h5' fontWeight='700' color='#41414D'>
                                Voltar para home
                            </Text>
                        </Flex>
                    </Link>
                </Flex>
                <Spacer />
                <Flex direction='column'>
                    <MyInput value='Título do caso' />
                    <Textarea w='448px' h='175px' bg='#ffffff' placeholder='Descrição' borderWidth='1.5px' borderColor='#dcdce5' borderRadius='8px' mt='8px' />
                    <MyInput value='Valor em reais' marginTop='8px' />
                    <Flex mt='16px'>
                        <Button w='177px' h='60px' border='2px solid #A8A8B3' color='#41414D'>Cancelar</Button>
                        <Spacer w='8px' />
                        <MyButton value='Cadastrar' customW='263px' />
                    </Flex>
                </Flex>
            </Flex>
        </Center>
    )
}