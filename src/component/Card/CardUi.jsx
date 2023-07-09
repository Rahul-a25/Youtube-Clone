import React, { useContext, useEffect, useState } from 'react'
import { AspectRatio, Card, Box } from '@chakra-ui/react'
import { Image, Stack, Heading, Text, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import './card.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { myContext } from '../context/context';


const CardUi = () => {

  const { Data, SetData } = useContext(myContext)
  const options = {
    method: 'GET',
    url: 'https://imdb-top-100-movies1.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': '5d1be82a77msh43aa564869ec706p1ecc1cjsn0e9743c0cec3',
      'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
    }
  };
  useEffect(() => {
    getAllMovies()

  }, [])
  const getAllMovies = async () => {
    try {
      const res = await axios.request(options);
      SetData(res.data)
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='maincard'>


      <Box className='btnbox'>


        {/* Card Data */}
        <Box className='carditem'>
          {
            Data.map((e) => {
              return (
                <Link to={`/carddetails/${e.id}`} key={e.id} >
                  <Box className='rightdetail'>
                    <Card maxW='sm' style={{width:"350px"}}>
                      <Image
                        src={e.image[2][1]}
                        style={{width:"100%",height:"300px"}}
                        alt='Green double couch with wooden legs'
                        borderRadius='md'
                      />
                      <Box style={{display:"flex",marginTop:"10px"}}>
                        <Image
                          borderRadius='full'
                          boxSize='50px'
                          src={e.thumbnail}
                          alt='No image'
                        />
                        &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                        <Text align='start'>
                          {e.title}
                        </Text>
                      </Box>
                    </Card>
                  </Box>
                </Link>
              )
            })
          }
        </Box>

      </Box>
    </div>
  )
}

export default CardUi
