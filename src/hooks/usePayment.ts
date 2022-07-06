import { useContext } from "react";
import { paymentContext } from "../contexts/PaymentContext";

export function usePayment() {
    return useContext(paymentContext)
}