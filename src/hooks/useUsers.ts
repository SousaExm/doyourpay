import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    img: string;
    username: string
}


export function useUsers() {
    
    const [users, setUsers] = useState<User[]>()

    useEffect(()=> {
        fetch('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setUsers(data)
        })
    },[])
    
    return users
}