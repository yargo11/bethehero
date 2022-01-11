import { Box, Flex, Text, Image, Icon, Center, VStack, Link } from '@chakra-ui/react'
import { MdLogin } from 'react-icons/md'
import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'

export default function Home() {
  return (
    <Center w='full' h='100vh'>
      <Flex
        maxW='1440px'
        w='100%'
        h='820px'
        m='auto'
        px={['5px', '90px', '160px']} py={['10px', '62px', '122px']}
        justify='space-between'
        wrap='wrap'
      >
        <Flex direction='column' alignSelf='center' align={['center', 'start']} maxW='350yarn devpx'>
          <Image src='/Logo.png' alt='Be the Hero' />
          <Text as='h1' mt='100px'>
            Faça seu logon
          </Text>
          <MyInput name='Sua ID' value='' customW='351px' onChangeEvent={event => {}}/>
          <MyButton value="Entrar" marginTop='16px' customW='351px' anchor='/lista' />
          <Flex align='center' mt='40px'>
            <Icon as={MdLogin} color='#e02041' mr='20px' /><Text as='h5' fontWeight='700' color='#41414D' ><Link href='/cadastro'>Não tenho cadastro</Link></Text>
          </Flex>
        </Flex>
        <Flex>
          <Image src='/OmniStack11 1.png' alt='Be the Hero' />
        </Flex>
      </Flex>
    </Center>
  )
}
