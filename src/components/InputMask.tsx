import { Input } from "@chakra-ui/react";
import { usePayment } from "../hooks/usePayment";

interface InputProps {
    currency: string,
    locale: string,
    minimumFractionDigits: number
}

export function InputMask({locale, minimumFractionDigits, currency}:InputProps){

    const {setAmount, amount} = usePayment()
    function maskAmountToLocale(value:number){
        return value.toLocaleString(locale,{
            currency: currency,
            style: 'currency',
            minimumFractionDigits: minimumFractionDigits
        })
    }

    function handleInputForMask(event:React.KeyboardEvent<HTMLInputElement>){
        //Se a tecla precionada for um número ou backspace
        if(event.key.replace(/\D/g, "") !== "" || event.key === "Backspace"){
            let formatedValue: any = amount.replace(/\D/g,"")  
            console.log(amount.toString())  

            if(event.key === "Backspace"){  
                formatedValue = formatedValue.slice(0, -1)
                formatedValue = formatedValue / 100
                setAmount(maskAmountToLocale(formatedValue))
                return
            }

            if(event.key.replace(/\D/g, "") !== "" && amount.toString().length <= 16){
                formatedValue = formatedValue + event.key
                formatedValue = formatedValue / 100
                setAmount(maskAmountToLocale(formatedValue))
            }
        }
    }
    
    return (
        <Input
        autoFocus
        onChange={() => setAmount(amount)}
        value={amount}
        onKeyUp={(event) => handleInputForMask(event)} 
        placeholder="R$ 0,00"/>
    )
}