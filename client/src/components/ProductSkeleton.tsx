import { AddIcon } from "@chakra-ui/icons"
import { Box,Text, Flex, Heading, Button, TableContainer, Table, Thead, Tr, Th, Td, Tbody, HStack, Badge, Skeleton, SkeletonCircle } from "@chakra-ui/react"

const ProductSkeleton = () => {


  
    return (
    <Box
      shadow={'md'}
      rounded={'md'}
      alignItems={'center'}
      m={5}
    >
      <Flex px={5} justifyContent={'space-between'}>
        <Heading>
          <Skeleton>Product List</Skeleton>
                </Heading>
                <Skeleton>        <Button colorScheme='blue'leftIcon={<AddIcon />} >
            Add Product
                </Button>
                </Skeleton>

      </Flex>
      
      <TableContainer>
        <Table variant='striped'>
          <Thead>
            <Tr>
                <Th>
                    <Skeleton>Id</Skeleton>            
                </Th>
                <Th>
                    <Skeleton>Name</Skeleton>            
                </Th>
                <Th>
                    <Skeleton>Description</Skeleton>               
                            </Th>
                            <th><Skeleton>
                                Is In Store?
                            </Skeleton>
                            </th>

                            <Th isNumeric>
                                <Skeleton>Price</Skeleton>
              </Th>
                            <Th><Skeleton>
                                Actions
                            </Skeleton>
                                
              </Th>
            </Tr>
          </Thead>
          <Tbody>
              {     Array.from({length:5}).map((_,index) =>
                (
                  <Tr key={index}>
                    <Td><Skeleton>ID</Skeleton></Td>
                  <Td>
                          <HStack>
                              <SkeletonCircle>AD</SkeletonCircle>
                      <Text><Skeleton>Name</Skeleton></Text>
                    </HStack>
                    </Td>
                    <Td><Skeleton>Product Desctiption</Skeleton></Td>
                    <Td>
                      <Badge>
                       <Skeleton>YES</Skeleton>
                      </Badge>
                    </Td>
                    <Td isNumeric><Skeleton>123</Skeleton></Td>
                      <Td>
                          <HStack>
                            <SkeletonCircle>1</SkeletonCircle>    
                            <SkeletonCircle>1</SkeletonCircle>    
                            <SkeletonCircle>1</SkeletonCircle>    
                          </HStack> 
                        
                      </Td>  
                  </Tr>
              )
              )
              }
            
          </Tbody>
        
        </Table>
      </TableContainer>
     
      
  </Box>
        
    )
}
export default ProductSkeleton