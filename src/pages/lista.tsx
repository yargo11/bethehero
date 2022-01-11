import { Flex, Image, Text, Button, Icon, SimpleGrid, Box } from '@chakra-ui/react'
import MyButton from '../components/MyButton'

import { FiPower } from 'react-icons/fi'
import Casos from '../components/Casos'

import { useCasos } from '../hooks/useCasos'


export default function Lista() {

    const { casos } = useCasos()

    return (
        <Flex direction='column' maxW='1118px' w='100%' m='auto'>
            <Flex w='full' justify='space-between' alignSelf='center' mt='32px'>
                <Flex alignItems='center'>
                    <Image src='/Logo.png' w='144px' />
                    <Text as='h3' ml='48px'> Bem vinda, APAD</Text>
                </Flex>
                <Flex alignItems='center'>
                    <MyButton customW='262px' value='Cadastrar novo caso' anchor='/novo_caso' />
                    <Button w='80px' h='60px' borderRadius='8px' ml='24px' border='1.5px solid #DCDCE6;'>
                        <Icon as={FiPower} color='#e02041' w='24px' h='24px' />
                    </Button>
                </Flex>
            </Flex>

            <Text as='h1' mt='80px'>Casos cadastrados</Text>

            <SimpleGrid minChildWidth='543px' spacing='32px' my='32px'>
                {casos.map((caso) => (
                    <Box key={caso.id}>
                        <Casos

                            caso={caso.caso}
                            descricao={caso.descricao}
                            valor={caso.valor}
                        />
                    </Box>
                ))}
            </SimpleGrid>
        </Flex>
    )
}
