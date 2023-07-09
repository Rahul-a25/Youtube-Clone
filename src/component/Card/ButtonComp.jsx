import {useContext} from 'react'
import './card.css'
import {Button,Box } from '@chakra-ui/react'
import { myContext } from '../context/context'
const ButtonComp = () => {
  const { SetData,DataFilter } = useContext(myContext)
  return (
    <div>
         <Box className='btnwala'>
      <Button onClick={()=>{SetData(DataFilter)}} colorScheme='gray'>All</Button>
      <Button onClick={()=>{SetData(DataFilter.filter((e)=>e.genre[0]==='Action'))}} colorScheme='gray'>Action</Button>
      <Button onClick={()=>{SetData(DataFilter.filter((e)=>e.genre[0]==='Drama'))}} colorScheme='gray'>Drama</Button>
      <Button onClick={()=>{SetData(DataFilter.filter((e)=>e.genre[0]==='Crime'))}} colorScheme='gray'>Crime</Button>
      <Button onClick={()=>{SetData(DataFilter.filter((e)=>e.genre[0]==='Biography'))}} colorScheme='gray'>Biography</Button>
      <Button onClick={()=>{SetData(DataFilter.filter((e)=>e.genre[0]==='Adventure'))}}  colorScheme='gray'>Adventure</Button>
      <Button onClick={()=>{SetData(DataFilter.filter((e)=>e.genre[0]==='Comedy'))}}  colorScheme='gray'>Comedy</Button>
      <Button onClick={()=>{SetData(DataFilter.filter((e)=>e.genre[0]==='Mystery'))}} colorScheme='gray'>Mystery</Button>
      <Button onClick={()=>{SetData(DataFilter.filter((e)=>e.genre[0]==='Animation'))}} colorScheme='gray'>Animation</Button>
     
      </Box>
    </div>
  )
}

export default ButtonComp
