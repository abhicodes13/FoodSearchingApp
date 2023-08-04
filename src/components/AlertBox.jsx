import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

export default function AlertBox(){
  return(
    <Alert status='success'>
  <AlertIcon />
  <AlertDescription>Join now and get free trial for a month</AlertDescription>
</Alert>
  )
}