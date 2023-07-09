import React from 'react'
import './home.css'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import {RiMovieLine,RiHistoryFill} from "react-icons/ri";
import {PiMusicNotesLight} from "react-icons/pi";
import {MdOutlineLibraryMusic,MdOutlineSubscriptions,MdOutlineAppShortcut} from "react-icons/md";
import { AiOutlineHome} from "react-icons/ai";
import { HiOutlineShoppingBag,HiOutlineTrendingUp} from "react-icons/hi";
import CardUi from './CardUi';
import { Image, Card, Button, Divider, Stack, ButtonGroup, Heading, Box, Text, CardBody, CardFooter } from '@chakra-ui/react'
import './home.css'
import ButtonComp from './ButtonComp';
const Home = () => {

    return (
        <>
            <Navbar />

            {/* // navbar section? */}
            <div className='mainHome'>

                {/* sidebarsection */}

                <Box className='left'>
                    {/* Firstuper */}
                    <Box className='firstuper'>
                   {/* <Link to='/'> */}
                   <Box className='sidebar' >
                    <Text><AiOutlineHome/></Text>   
                    <Text  className='space'>Home</Text>
                    </Box>
                   {/* </Link> */}
                    <Box className='sidebar'>
                    <Text><MdOutlineAppShortcut/></Text>   
                    <Text className='space'>Short</Text>
                    </Box>
                    <Box className='sidebar'>
                    <Text><MdOutlineSubscriptions/></Text>   
                    <Text className='space'>Subscription</Text>
                    </Box>
                    </Box>
                    <Divider style={{margin:"20px 0px",color:"black"}}/>
                          {/* middleuper */}
                    <Box className='middleuper'>
                    <Box>
                    <Box className='sidebar'>
                    <Text><MdOutlineLibraryMusic/></Text>   
                    <Text className='space'>Library</Text>
                    </Box>
                    <Box className='sidebar'>
                    <Text><RiHistoryFill/></Text>   
                    <Text className='space'>History</Text>
                    </Box>
                    <Box className='sidebar'>
                    <Text><HiOutlineTrendingUp/></Text>   
                    <Text className='space'>Trending</Text>
                    </Box>
                    </Box>
                    </Box>

                    <Divider style={{margin:"20px 0px",color:"black"}}/>
                    <Box className='middleuper'>
                    <Box>
                    <Box className='sidebar'>
                    <Text><HiOutlineShoppingBag/></Text>   
                    <Text className='space'>Shopping</Text>
                    </Box>
                    <Box className='sidebar'>
                    <Text><PiMusicNotesLight/></Text>   
                    <Text className='space'>Music</Text>
                    </Box>
                    <Box className='sidebar'>
                    <Text><RiMovieLine/></Text>   
                    <Text className='space'>Movies & Shows</Text>
                    </Box>
                    </Box>
                    </Box>
                     
                    
                </Box>



                {/* bodysection */}

                <Box className="body" >
                <ButtonComp/>
                    <Box className='UIscroll' >
                    <CardUi/>
                    </Box>
                    
                </Box>


            </div>
        </>

    )
}

export default Home