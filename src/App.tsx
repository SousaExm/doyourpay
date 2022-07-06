import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { PaymentContextProvider } from "./contexts/PaymentContext";
import { UsersList } from "./pages/UsersList";
import { theme } from './theme'

function App() {

  return (
    <PaymentContextProvider>
      <ChakraProvider theme={theme} >
        <Header/>
        <UsersList/>
      </ChakraProvider>
    </PaymentContextProvider>
  )
}

export default App
