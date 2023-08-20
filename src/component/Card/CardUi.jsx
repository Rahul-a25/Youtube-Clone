import React, { useContext, useEffect} from 'react'
import {Card, Box } from '@chakra-ui/react'
import { Image,  Text} from '@chakra-ui/react'
import './card.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { myContext } from '../context/context';


const CardUi = () => {

  const {search, Data, DataFilter,SetData,SetDataFilter } = useContext(myContext)
 console.log((DataFilter));
  const  getAllMovies = async () => {
    const options = {
      method: 'GET',
      url: 'https://imdb-top-100-movies.p.rapidapi.com/',
      headers: {
        'X-RapidAPI-Key': 'ec9e88d300msh4dcc43b3c069161p144880jsn819ba87be57d',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      SetData(response.data);
      SetDataFilter(response.data);
    } catch (error) {
      console.error(error);
    }
};
useEffect(() => {
  getAllMovies()

}, [search])

 

  return (
    <div className='maincard'>


      <Box className='btnbox'>


        {/* Card Data */}
        <Box className='carditem'>
          {
           Data.length>0?(
            Data.map((e) => {
              return (
                <Link to={`/carddetails/${e.id}`} key={e.id} >
                  <Box className='rightCard'>
                    <Card maxW='sm' style={{width:"380px"}}>
                      <Image
                        src={e.image}
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
           ):<h1 style={{width:"50%",textAlign:"center",margin:"200px 400px",fontSize:"40px",color:"red"}}>Loading Please Wait.......</h1>
          }
        </Box>

      </Box>
    </div>
  )
}

export default CardUi
