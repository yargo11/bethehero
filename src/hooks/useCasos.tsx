import { createServer, Model } from 'miragejs';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';

interface Caso {
    id: number,
    caso: string,
    descricao: string,
    valor: number
}

type CasoInput = Omit<Caso, 'id'>

interface CasosProviderProps {
    children: ReactNode
}

interface CasosContextData {
    casos: Caso[];
    createCaso: (caso: CasoInput) => void;
}

const CasosContext = createContext<CasosContextData>({} as CasosContextData);

export function CasosProvider({ children }: CasosProviderProps) {

    const [casos, setCasos] = useState<Caso[]>([]);

    useEffect(() => {
        api.get('casos')
            .then(response => setCasos(response.data.casos))
    }, [])

    async function createCaso(casoInput: CasoInput) {
        const response = await api.post('/casos', casoInput)
        const { caso } = response.data

        setCasos([
            ...casos,
            caso
        ]);

    }

    return (
        <CasosContext.Provider value={{ casos, createCaso }}>
            {children}
        </CasosContext.Provider>
    )

}

export function useCasos() {
    const context = useContext(CasosContext);

    return context
}