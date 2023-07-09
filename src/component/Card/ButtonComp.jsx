import React from 'react'
import './card.css'
import {Button,Box } from '@chakra-ui/react'
const ButtonComp = () => {
  return (
    <div>
         <Box className='btnwala'>
      <Button colorScheme='gray'>All</Button>
      <Button colorScheme='gray'>Music</Button>
      <Button colorScheme='gray'>Mixes</Button>
      <Button colorScheme='gray'>T-Series</Button>
      <Button colorScheme='gray'>Comedy</Button>
      <Button colorScheme='gray'>Html</Button>
      <Button colorScheme='gray'>Love Song</Button>
      <Button colorScheme='gray'>Cooking Shows</Button>
      <Button colorScheme='gray'>Cricket</Button>
     
      </Box>
    </div>
  )
}

export default ButtonComp
