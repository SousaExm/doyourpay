import { CircularProgress, Flex } from "@chakra-ui/react";
import { CardUser } from "../components/CardUser";
import { ModalPayment } from "../components/ModalPayment";
import { ModalPaymentProof } from "../components/ModalPaymentProof";
import { useUsers } from "../hooks/useUsers";

export function UsersList () {
    const users  = useUsers()
    return(
        <main>
            <Flex align='center' justify='center' direction='column' bgColor="#212121" minH="100vh">
                {users? (
                    (users.map(user => (
                        <CardUser user={user} key={user.id}/>
                    )))
                ) : (
                    <CircularProgress isIndeterminate size="100px"/>
                )
                }                
            </Flex> 
            <ModalPayment/>  
            <ModalPaymentProof/>
        </main>  
    )
}