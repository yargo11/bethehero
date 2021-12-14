import { Center, Box, Flex, Image, Text, Icon, Link, VStack, Spacer } from '@chakra-ui/react'

import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'

import { FiArrowLeft } from 'react-icons/fi'

export default function Cadastro() {
    return (
        <Center w='full' h='100vh'>
            <Flex w='1120px' h='577px' bg='#F0F0F5' p='100px' boxShadow='0px 0px 100px rgba(0, 0, 0, 0.1)' borderRadius='8px'>
                <Flex direction='column' alignSelf='center' align='start'>
                    <Image src='/Logo.png' alt='Be the Hero' w='191px' />
                    <Text as='h1' mt='64px'>
                        Cadastro
                    </Text>

                    <Text as='h5' color='#737380' mt='32px' maxW='384px'>
                        Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
                    </Text>

                    <Link href='/' mt='84px'>
                        <Flex align='center' >
                            <Icon as={FiArrowLeft} color='#e02041' mr='20px' />
                            <Text as='h5' fontWeight='700' color='#41414D'>
                                Voltar para o logon
                            </Text>
                        </Flex>
                    </Link>
                </Flex>
                <Spacer />
                <Flex direction='column'>
                    <MyInput value='Nome da ONG' />
                    <MyInput value='E-mail' marginTop='8px'/>
                    <MyInput value='WhatsApp'  marginTop='8px'/>
                    <Flex mt='8px'>
                        <MyInput value='Cidade' customW='370px' />
                        <Spacer w='8px'/>
                        <MyInput value='UF' customW='70px' />
                    </Flex>
                    <MyButton  value='Cadastrar' marginTop='16px' customW='448px'/>
                </Flex>
            </Flex>
        </Center>
    )
}