import React, { useContext, useEffect, useState } from 'react'
import './carddetails.css'
import { useParams } from 'react-router-dom'
// import { BsFillStarFill } from "react-icons/bs";
import axios from 'axios'
import { BsDownload } from "react-icons/bs";
import { PiShareFat } from "react-icons/pi";
import { BiLike, BiDislike } from "react-icons/bi";
import { Box, Text, Image, AspectRatio } from '@chakra-ui/react'
import { Card, Button, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { myContext } from '../context/context';
const CardDetails = () => {
      const{Detail,SetDetails}=useContext(myContext)
      console.log(Detail);
        const {id}=useParams();
        console.log(id);
        useEffect( ()=>{
            fetchMovies()

          },[])

        const fetchMovies = async () => {
            const options = {
                method: 'GET',
                url: `https://imdb-top-100-movies.p.rapidapi.com/${id}`,
                headers: {
                  'X-RapidAPI-Key': '5d1be82a77msh43aa564869ec706p1ecc1cjsn0e9743c0cec3',
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

    // uncomment karo

    // fetchMovies();

    // const options = {
    //     method: 'GET',
    //     url: `https://imdb-top-100-movies.p.rapidapi.com/${id}`,
    //     headers: {
    //       'X-RapidAPI-Key': '5d1be82a77msh43aa564869ec706p1ecc1cjsn0e9743c0cec3',
    //       'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
    //     }
    //   };


    //   const carddetail = async () => {
    //     try {
    //         const response = await axios.request(options);
    //         SetDetails(response.data)
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    //   };



    return (
        <>
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
                    <Text mt='' align='start' fontSize='25px' >Rahul ARORA</Text>

                    {/* card detail footer button  */}
                    <Box style={{ display: "flex", justifyContent: "space-between" }} >
                        <Box style={{ width: "300px", marginRight: "300px", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                            <Image
                                borderRadius='full'
                                boxSize='50px'
                                src='https://bit.ly/dan-abramov'
                                alt='Dan Abramov'
                            />
                            <Button colorScheme='Black' backgroundColor='black' borderRadius='20px'>Subscribe</Button>

                        </Box>
                        <Box>
                            <Button style={{ marginRight: "30px" }} colorScheme='gray' leftIcon={<BiLike />} rightIcon={<BiDislike />} >Cricket</Button>
                            <Button style={{ marginRight: "30px" }} colorScheme='gray' leftIcon={<PiShareFat />}>Share</Button>
                            <Button colorScheme='gray' leftIcon={<BsDownload />}>Download</Button>
                        </Box>
                    </Box>
                </Box>
                <Box className='rightdetail'>
                    <Card className='detailcardright' maxW='sm'>
                        <AspectRatio style={{ width: "100%" }} maxW='560px' ratio={1}>
                            <iframe
                                style={{ width: "100%", borderRadius: "10px", height: "100%" }}
                                title='naruto'
                                src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                                allowFullScreen
                            />
                        </AspectRatio>
                    </Card>
                </Box>
            </Box>
        </>
    )
}

export default CardDetails;