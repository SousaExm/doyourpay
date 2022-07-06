import {  Icon ,Center, Flex, Text } from "@chakra-ui/react";
import { MdPayments } from 'react-icons/md'


export function Header() {
    return(
        <Flex bgColor="#212121" borderBottom="1px solid #545353" mb="16px" color="#fff" align="center" justify="flex-start" py="16px" px="128px" >
            <Icon as={MdPayments} w="48px" h="48px" mr="8px" color="#3fb94d"></Icon>
            <Text  fontSize="3xl" fontWeight="bold" mr="4px">DoYour</Text>
            <Center fontSize="3xl" fontWeight="bold" border="2px solid #3fb94d" p="4px" >Pay</Center>
        </Flex>
    )
}