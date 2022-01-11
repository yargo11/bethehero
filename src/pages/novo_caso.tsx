import { FormEvent, useState, useContext, } from 'react'
import { Center, Box, Flex, Image, Text, Icon, Link, Textarea, Spacer, Button, Input } from '@chakra-ui/react'

import { useCasos } from '../hooks/useCasos';
import { FiArrowLeft } from 'react-icons/fi'

import MyInput from '../components/MyInput';

export default function NovoCaso() {

    const { createCaso } = useCasos()

    const [caso, setCaso] = useState('');
    const [valor, setValor] = useState(0);
    const [descricao, setDescricao] = useState('');

    async function handleCreateCaso(event: FormEvent) {
        event.preventDefault();

        await createCaso({
            caso,
            descricao,
            valor
        })

        alert('Caso cadastrado com sucesso!!!')

        setCaso('')
        setDescricao('')
        setValor(0)

    }

    return (
        <Center w='full' h='100vh'>
            <Flex w='100%' maxW='1120px' h='577px' bg='#F0F0F5' p='100px' boxShadow='0px 0px 100px rgba(0, 0, 0, 0.1)' borderRadius='8px' wrap='wrap'>
                <Flex direction='column' alignSelf='center' align='start'>
                    <Image src='/Logo.png' alt='Be the Hero' w='191px' />
                    <Text as='h1' mt='64px'>
                        Cadastrar novo caso
                    </Text>

                    <Text as='h5' color='#737380' mt='32px' maxW='384px'>
                        Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </Text>

                    <Link href='/lista' mt='84px'>
                        <Flex align='center' >
                            <Icon as={FiArrowLeft} color='#e02041' mr='20px' />
                            <Text as='h5' fontWeight='700' color='#41414D'>
                                Voltar para casos
                            </Text>
                        </Flex>
                    </Link>
                </Flex>
                <Spacer />
                <Flex direction='column' as='form' onSubmit={handleCreateCaso}>

                    <MyInput name='Caso' value={caso} onChangeEvent={event => setCaso(event.target.value)} marginTop='8px' />
                    {/* <Input placeholder='Novo caso' w='100%' maxW='448px' mt='8px' h='60px' zIndex='4' bg='#fff' borderWidth='1.5px' borderColor='#dcdce5' borderRadius='8px'
                        value={caso} onChange={event => setCaso(event.target.value)} /> */}

                    <Textarea w='448px' h='175px' bg='#ffffff' placeholder='Descrição' value={descricao} onChange={event => setDescricao(event.target.value)} borderWidth='1.5px' borderColor='#dcdce5' borderRadius='8px' mt='8px' />

                    <MyInput name='Valor' value={valor} onChangeEvent={event => setValor(Number(event.target.value))} marginTop='8px' />
                    {/* <Input placeholder='Valor em Reais' w='100%' maxW='448px' mt='8px' h='60px' zIndex='4' bg='#fff' borderWidth='1.5px' borderColor='#dcdce5' borderRadius='8px'
                        value={valor} onChange={event => setValor(Number(event.target.value))} /> */}

                    <Flex mt='16px'>

                        <Button w='177px' h='60px' border='2px solid #A8A8B3' color='#41414D'>Cancelar</Button>

                        <Spacer w='8px' />

                        <Button type='submit' w='100%' maxW='263px' bg='#e02041' color='#f0f0f5' borderRadius='8px' h='60px'
                            _hover={{
                                bg: 'red.500'
                            }} >
                            Cadastrar
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Center>
    )
}