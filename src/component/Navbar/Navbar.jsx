import { Box,Text,InputGroup ,Input,InputRightElement,Button} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GrYoutube} from "react-icons/gr";
import { ImYoutube2 } from "react-icons/im";
import { HiMenu} from "react-icons/hi";
import { BiVideoPlus,BiSearch} from "react-icons/bi";
import {IoMdNotificationsOutline} from "react-icons/io";
import { myContext } from '../context/context';

const Navbar = () => {
  const {search,SetSearch,Data,SetData} =useContext(myContext)
  console.log(Data)
  const change=(e)=>{
     SetSearch(e.target.value)
     SetData(Data.filter((e)=>{
      return search.toLowerCase()==='' ?e :e.title.toLowerCase().includes(search);
     }))
  }
  return (
    <Box style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      {/* left icon  */}
        <Box style={{display:'flex',marginLeft:"10px"}}> 
        <Text fontSize='25px' mt='5px'><HiMenu/></Text> &nbsp;&nbsp;&nbsp;&nbsp;
         <Text fontSize='30px' mt='3px' color='tomato'><GrYoutube/></Text>
         <Text fontSize='40px' ><ImYoutube2/></Text>
        </Box>

        {/* input search */}
        <Box>
        <InputGroup  mt='3' width='600px' size='md' >
      <Input 
       style={{borderRadius:"20px"}}
        pr='4.5rem'
        type='text'
        placeholder='Search'
        onChange={(e)=>change(e)}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='md' >
         <BiSearch style={{fontSize:"25px"}}/>
        </Button>
      </InputRightElement>
    </InputGroup>
        </Box>

        {/* right icon */}
        <Box style={{display:"flex",marginRight:"10px"}}>
            <Text fontSize='30px'><BiVideoPlus/></Text>&nbsp;&nbsp;&nbsp;&nbsp;
            <Text fontSize='30px'><IoMdNotificationsOutline/></Text>
        </Box>
    </Box>
  )
}

export default Navbar
