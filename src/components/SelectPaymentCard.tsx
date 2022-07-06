import { Select } from "@chakra-ui/react";
import { useEffect } from "react";
import { usePayment } from "../hooks/usePayment";

export function SelectPaymentCard (){

    const { setSelectedCard } = usePayment()
    let cards = [
        {
          card_number: '1111111111111111',
          cvv: 789,
          expiry_date: '01/18',
          validCard: true
        },
        {
          card_number: '4111111111111234',
          cvv: 123,
          expiry_date: '01/20',
          validCard: false
        },
    ];

    function handleChangeSelect(SelectedIndex: number){
        setSelectedCard(cards[SelectedIndex - 1])
    }

    return(
        <Select
        onChange={(e) => handleChangeSelect(e.target.selectedIndex)}
        >
            <option value="">Selecione um cartao</option>
            {cards.map(card => (
                <option 
                key={card.card_number} 
                value={card.card_number}
                >
                    Cartao com final {card.card_number.slice(-4)}
                </option>
            ))}
        </Select>
    )
}