import React, { useContext, useEffect } from 'react'
import './carddetails.css'
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BsDownload } from "react-icons/bs";
import { PiShareFat } from "react-icons/pi";
import { BiLike, BiDislike } from "react-icons/bi";
import { Box, Text, Image, AspectRatio, Flex } from '@chakra-ui/react'
import { Card, Button } from '@chakra-ui/react'
import { myContext } from '../context/context';
import getdetailRight from './Api/Api';
import RightDetail from './RightDetail';
const CardDetails = () => {
    const { Detail, SetDetails, detailRight, SetdetailRight } = useContext(myContext)
    console.log(detailRight);
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        MoviesData()
        getdetailRight(detailRight, SetdetailRight)
    }, [])
    useEffect(() => {
        getdetailRight(detailRight, SetdetailRight)
    }, [])


    const MoviesData = async () => {
        const options = {
            method: 'GET',
            url: `https://imdb-top-100-movies.p.rapidapi.com/${id}`,
            headers: {
                'X-RapidAPI-Key': 'ec9e88d300msh4dcc43b3c069161p144880jsn819ba87be57d',
                'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            SetDetails(response.data);
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <>
            <Navbar />
            <Box className='maindetail'>
                <Box className='leftdetail'>
                    <AspectRatio maxW='560px' ratio={1}>
                        <iframe
                            style={{ width: "1030px" }}
                            title='naruto'
                            src={Detail.trailer}
                            allowFullScreen
                        />
                    </AspectRatio>
                    <Text mt='3' align='start' fontSize='19px'  >{Detail.description}</Text>

                    {/* card detail footer button  */}
                    <Box style={{ display: "flex", justifyContent: "space-between"}} >
                        <Box style={{ width: "300px", marginRight: "300px", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                            <Image
                                borderRadius='full'
                                boxSize='50px'
                                src={Detail.thumbnail}
                                alt='Dan Abramov'
                            />
                            <Button colorScheme='Black' backgroundColor='black' borderRadius='20px'>Subscribe</Button>

                        </Box>
                        <Box>
                            <Button style={{ marginRight: "30px" }} colorScheme='gray' leftIcon={<BiLike />} rightIcon={<BiDislike />} >{Detail.rating}</Button>
                            <Button style={{ marginRight: "30px" }} colorScheme='gray' leftIcon={<PiShareFat />}>Share</Button>
                            <Button colorScheme='gray' leftIcon={<BsDownload />}>Download</Button>
                        </Box>
                    </Box>
                </Box>
                <Box className='rightdetail' >

                <RightDetail/>
                </Box>
            </Box>
        </>
    )
}

export default CardDetails;

// <Card key={e.id} className='detailcardright'
//                                     style={{ margin: "20px auto",width:"400px",height:"500px",border:"2px solid black" }} maxW='sm'>
//                                         {/* <AspectRatio style={{ width: "100%" }} maxW='560px' ratio={1}> */}
//                                             <iframe
//                                                 style={{ width: "100%", borderRadius: "10px", height: "300px" }}
//                                                 title='naruto'
//                                                 src={e.trailer}
//                                                 allowFullScreen
//                                             />
//                                             <Box style={{ display: "flex" }}>
//                                                 <Image
//                                                     style={{margin:"10px 0px"}}
//                                                     borderRadius='full'
//                                                     boxSize='50px'
//                                                     src={e.thumbnail}
//                                                     alt='No image'
//                                                 />
//                                                 &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
//                                                 <Text align='start' style={{marginTop:"10px"}}>
//                                                     {e.title}
//                                                 </Text>
//                                             </Box>

//                                         {/* </AspectRatio> */}
//                                     </Card>