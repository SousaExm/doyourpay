import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    Text,
    Button,
    Stack,
} from '@chakra-ui/react'
import { useEffect } from 'react';

import { usePayment } from "../hooks/usePayment";
import { InputMask } from './InputMask';
import { SelectPaymentCard } from './SelectPaymentCard';

export function ModalPayment() {
    const { isOpenModalPayment, setIsOpenModalPayment, selectedUser, processTransaction, status  } = usePayment()

    useEffect(() => {
        if(status?.response !== undefined){       
        }
    },[status])

    function handleSubmitTransaction(){
        processTransaction()
    }

    return (
        <Modal              
        onClose={() => setIsOpenModalPayment(false)}
        isOpen={isOpenModalPayment}
        >
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader
                        borderTopRadius="md"
                        bgColor="#474a6e"
                        color="#fff"
                    >
                        Pagamento para <Text color="#d1da59" display="inline">{selectedUser?.name}</Text>
                    </ModalHeader>
                    <ModalBody p="16px">
                        <Stack spacing="16px" align="center">    
                            <InputMask
                            currency="BRL"
                            locale="pt-BR"
                            minimumFractionDigits={2}
                            />
                            <SelectPaymentCard/>
                            <Button 
                            isLoading={status?.loading}
                            onClick={() => handleSubmitTransaction()}
                            colorScheme="facebook" 
                            bgColor="#474a6e"
                            width="80px"
                            >
                                Pagar
                            </Button>
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </Modal> 
        )
}