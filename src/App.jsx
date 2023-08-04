import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import AlertBox from './components/AlertBox';


export default function App() {
  return (
   <ChakraProvider>
      <AlertBox />
    </ChakraProvider>
  )
}
