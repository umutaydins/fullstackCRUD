import { Avatar,Text, Badge, Box, Button, Flex, Heading, HStack, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import './App.css'
import { AddIcon, DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { BASE_URL } from './constant'
import { useEffect, useState } from 'react'
import { Product } from './types/product'
import ProductSkeleton from './components/ProductSkeleton'
import ProductForm from './components/ProductForm'

function App() {
  
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [data, setData] = useState<Product[]>([]);
  const [islLoading, setIsLoading]= useState<boolean>(false);
  
  useEffect(() => {
    fetchData();
  },[])
  const fetchData = ()=>{
    setIsLoading(true);  
    axios.get(BASE_URL+"Product").then((response) => {
      setData(response.data);
    }
    ).catch((error) => {
      console.log(error)
      
    }).finally(() => { setIsLoading(false) })
  } 

  if(islLoading)return<ProductSkeleton/>


  
  return (
    <Box
      shadow={'md'}
      rounded={'md'}
      alignItems={'center'}
      m={5}
    >
      <Flex px={5} justifyContent={'space-between'}>
        <Heading
        fontSize={"20"}>
          Product List
        </Heading>
        <Button colorScheme='blue' leftIcon={<AddIcon />}
         onClick={onOpen}>
          Add Product
        </Button>
      </Flex>
      
      <TableContainer>
        <Table variant='striped'>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Is in Store</Th>
              <Th isNumeric>Price</Th>
              <Td>Actions</Td>
            </Tr>
          </Thead>
          <Tbody>
              {data.map((product: Product) =>
                (
                  <Tr key={product.id}>
                    <Td>{product.id}</Td>
                  <Td>
                    <HStack>
                      <Avatar size={'sm'} name={product.name} />
                      <Text>{product.name}</Text> 
                    </HStack>
                    
                    </Td>
                    <Td>{product.description}</Td>
                    <Td>
                      <Badge>
                        {product.isInStore ? "Yes" : "No"}
                      </Badge>
                    </Td>
                  <Td isNumeric>{product.price}</Td>
                  <td>
                    <HStack>
                      <EditIcon boxSize={ 22} color={'blue'} />
                      <DeleteIcon  boxSize={ 22} color={'red'} />
                      <ViewIcon  boxSize={ 22} color={'green'}/>
                    </HStack>
                  </td> 
                  </Tr>
              )
              )
              }
            
          </Tbody>
        
        </Table>
      </TableContainer>
      {
        data.length == 0 &&
        (<Heading textAlign={'center'} p={5} fontSize={14}>
          No Data
        </Heading>)
      }
      {isOpen && <ProductForm
        isOpen={isOpen}
        onClose={onClose}
        fetchProduct={fetchData}
      />}
  </Box>
  )
}

export default App
