import React, { useContext } from 'react'
import { myContext } from '../context/context'
import './carddetails.css'
import { Card,Flex,Text} from '@chakra-ui/react'
const RightDetail = () => {
    const {detailRight} =useContext(myContext)
  return (
    <div>
      {
                        detailRight.length > 0 ? (
                            detailRight.map((e) => {
                                return (
                                <>
                    <Card

                        style={{ width: "390px", height: "200px",margin:"15px auto"}}
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        <Flex>
                            {/* <AspectRatio maxW='560px' ratio={1}> */}
                                <iframe
                                    style={{width:"200px",borderRadius:"10px",height:"200px"}}
                                    title='naruto'
                                    src={e.trailer}

                                    allowFullScreen
                                />
                            {/* </AspectRatio>  */}
                            <Text style={{textAlign:"start",marginLeft:"10px",fontWeight:"600"}}>
                            {e.description}
                            </Text>
                        </Flex>


                    </Card>
                    </>
                      )
                            })

                        ) : <h1 style={{ textAlign: "center",color:"red" }}>Loading......</h1>
                    }  
    </div>
  )
}

export default RightDetail
