import { useToast } from "@chakra-ui/react";
import { createContext, useState, ReactNode } from "react"

interface User {
        id: number;
        name: string;
        img: string;
        username: string
}
interface CardType {
        card_number: string | undefined;
        cvv: number | undefined;
        expiry_date: string | undefined;
        validCard: boolean | undefined;
}

interface StatusType {
    loading: boolean,
    response: "aprovada" | "nao aprovada" | undefined;
}
  

interface UserContextType {
    selectedUser?: User, 
    isOpenModalPayment: boolean,
    amount: string,
    status: StatusType,
    setSelectedUser: (user:User | undefined) => void,
    setIsOpenModalPayment: (value:boolean) => void,
    setAmount: (value:string) => void,
    setSelectedCard: (card:CardType) => void,
    processTransaction: () => void,
    setStatus: (Status:StatusType) => void,
    isOpenProofModal: boolean,
    setIsOpenProofModal: (value: boolean) => void

}

interface ProviderType {
    children: ReactNode
}

export const paymentContext = createContext({} as UserContextType)

export function PaymentContextProvider({children}:ProviderType){
    
    const toast = useToast()
    const [ selectedUser, setSelectedUser ] = useState<User | undefined>()
    const [ isOpenModalPayment, setIsOpenModalPayment ] = useState<boolean>(false)
    const [ isOpenProofModal, setIsOpenProofModal ] = useState<boolean>(false)
    const [ selectedCard, setSelectedCard ] = useState<CardType | undefined>()
    const [ amount, setAmount ] = useState<string>('')
    const [ status, setStatus ] = useState<StatusType>({
        loading: false,
        response: undefined,
    })

    function processTransaction(){
        setStatus({loading: true, response: undefined})

        if(amount === '' || amount.replace(/\D/g,"") === "000" && selectedCard === undefined){
            setStatus({loading: false, response:undefined})
            toast({
                title: 'Por favor preencha os campos acima corretamente',
                status: 'error',
                isClosable: true,
            })
            return 
        }
        if(amount === '' || amount.replace(/\D/g,"") === "000"){
            setStatus({loading: false, response:undefined})
            toast({
                title: "Por favor insira um valor válido!",
                status: 'error',
                isClosable: true,
            })
            return 
        }
        if(!selectedCard){
            setStatus({loading: false, response:undefined})
            toast({
                title: "Por favor selecione um cartao",
                status: 'error',
                isClosable: true,
            })
            return 
        }
       
        if(selectedCard?.validCard === false){
            setTimeout(() => {
                setIsOpenModalPayment(false)
                setAmount('')
                setSelectedCard(undefined)
                setStatus({loading: false, response:"nao aprovada"})
                toast({
                title: "Infelizmente tivemos um problema com seu cartao.",
                status: 'warning',
                isClosable: true,
            })
            }, 2000)

            setTimeout(() => {
                setIsOpenProofModal(true)
            }, 2400)

        }else{

            setTimeout(() => {
                setIsOpenModalPayment(false)
                setAmount('')
                setSelectedCard(undefined)
                setStatus({loading: false, response: "aprovada"})
                toast({
                    title: "Transacao aprovada!",
                    status: 'success',
                    isClosable: true,
                })
            }, 2000)
            
            setTimeout(() => {
                setIsOpenProofModal(true)
            }, 2400)
        }
       
    }

    const contextValue = {
        selectedUser,
        setSelectedUser,
        isOpenModalPayment,
        setIsOpenModalPayment,
        setAmount,
        amount,
        setSelectedCard,
        processTransaction,
        status,
        setStatus,
        isOpenProofModal,
        setIsOpenProofModal
    }
    
    return( 
        <paymentContext.Provider value={contextValue}>
            {children}
        </paymentContext.Provider>
    )
}


// const transactionData:TransactionType = {
//     card: selectedCard,
//     destination_user_id: selectedUser?.id,
//     amount: amount
// }

// fetch("https://crossorigin.me/https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989", {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(transactionData)
// })
// .then( reposnse => reposnse.json())
// .then( data => {
//     setStatus({loading: false, response: data.status})
//     setSelectedCard(undefined)
//     setAmount(0)
// })

// interface TransactionType {
    
//     card: CardType | undefined
//     destination_user_id: number | undefined;
//     amount: string | undefined;
  
// }