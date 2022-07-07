import { Image, Button, Heading, Text, Flex } from "@chakra-ui/react";
import { usePayment } from "../hooks/usePayment";

interface CardUserProps {
    user: {
        id: number;
        name: string;
        img: string;
        username: string;
    }
}


export function CardUser({user}:CardUserProps){

    const { setSelectedUser, setIsOpenModalPayment } = usePayment()
    function handleSendPay(){
        setSelectedUser(user)
        setIsOpenModalPayment(true)
    }

    return(
        <Flex
            color="#fff"
            bgGradient="linear(to-b, #363855, #252637)"
            width="560px"
            justifyContent="space-between"
            align="center"
            p="16px"
            my="8px"
            maxW={600}
            w={["95%", "90%", "90%"]}
            borderRadius="xl"
        >   
        <Flex>
            <Image
                borderRadius='full'
                boxSize='100px'
                src={user.img}
                alt={user.name}
                marginRight="16px"
            />
            <Flex 
                display="flex" 
                justify="center" 
                align="flex-start" 
                direction="column"
                >
                <Heading as="h2" size="sm">{user.name}</Heading>
                <Text>ID:{user.id} - Username: {user.username}</Text>
            </Flex>
        </Flex>
        <Button color="black" size="md"
        onClick={() => handleSendPay()}>Pagar</Button>
        </Flex>
    )
}