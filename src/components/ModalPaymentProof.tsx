import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    Text
} from '@chakra-ui/react'
import { usePayment } from '../hooks/usePayment'

export function ModalPaymentProof() {
    
    const { isOpenProofModal, setIsOpenProofModal, status } = usePayment()
    
    return (
        <Modal             
        onClose={() => setIsOpenProofModal(false)}
        isOpen={isOpenProofModal}
        >
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader
                        borderTopRadius="md"
                        bgColor="#474a6e"
                        color="#fff"
                    >
                        Recibo de pagamento
                    </ModalHeader>
                    <ModalBody px="32px" py="30px">
                        O Pagamento {status.response === 'nao aprovada' &&  <Text fontWeight="bold" display="inline-block">NAO&nbsp;</Text> }foi concluido com sucesso.
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </Modal> 
    )
}