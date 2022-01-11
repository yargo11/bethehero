import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { CasosProvider } from '../hooks/useCasos'
import { createServer, Model } from 'miragejs'

function MyApp({ Component, pageProps }: AppProps) {

  createServer({

    models: {
      caso: Model,
    },

    seeds(server) {
      server.db.loadData({
        casos: [
          {
            id: 1,
            caso: "Cadela atropelada",
            descricao: "A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.",
            valor: 100
          },
          {
            id: 2,
            caso: "Gato Tomtom casos.ts",
            descricao: "O gato tom pulou da janela do terceiro andar",
            valor: 200
          }
        ]
      })
    },

    routes() {
      this.namespace = 'api';

      this.get('/casos', (schema) => {
        return this.schema.all('caso')
      })

      this.post('/casos', (schema, request) => {
        const data = JSON.parse(request.requestBody)
        return schema.create('caso', data)
      })
    }
  })
  return (

    <CasosProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </CasosProvider>

  )
}

export default MyApp
