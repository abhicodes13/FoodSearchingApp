import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import AlertBox from './components/AlertBox';
import CardBoard from './components/CardBoard';


export default function App() {
  return (
   <ChakraProvider>
      <AlertBox />
     <CardBoard />
    </ChakraProvider>
  )
}
