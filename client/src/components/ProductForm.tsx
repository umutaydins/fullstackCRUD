import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Textarea, VStack, Switch,Text, useToast } from "@chakra-ui/react"
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constant";

type ProductFormProps=
    {
        isOpen: boolean;
        onClose: () => void;
        fetchProduct: () => void;
    }

const ProductForm = ({ isOpen, onClose, fetchProduct }:ProductFormProps) => {
    const [product, setProduct] = useState({
        name: '',
        description:'',
        price:0,
        isInStore:false,
    });
    const toast = useToast();

    const onSave = () => {
    

        axios.post(BASE_URL + "product", product).then(() => {
            onClose();
            fetchProduct();

            toast({
                title: 'Product added.',
                description: 'Description added.',
                isClosable: true,
                duration: 1000,
            })
        }).catch((err) => { 
            console.log(err);
         }) 
    }   

            return (
                <>
           
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader
                                shadow={'sm'}>
                                Add Product
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <VStack alignItems={"self-start"} gap={4}>
                                    <Input
                                        type="text"
                                        placeholder="Name"
                                        value={product.name}
                                        onChange={(e)=>setProduct({...product,name:e.target.value})}
                                    />

                                    <Textarea placeholder="Description.."
                                        value={product.description}
                                        onChange={(e)=>setProduct({...product,description:e.target.value})}
                                    />
                                    <Input type="number" placeholder="Price" value={product.price}
                                    onChange={(e)=>setProduct({...product,price:parseInt(e.target.value)})}
                                    />
                                    <Text>
                                        Is in store?
                                        </Text>
                                    <Switch isChecked={ product.isInStore} onChange={(e)=>setProduct({...product,isInStore:e.target.checked })}
                                        />
                                </VStack>
                            </ModalBody>
          
                            <ModalFooter>
                                <Button variant={'ghost'}  mr={3} onClick={onClose}>
                                    Close
                                </Button>
                                <Button onClick={onSave} variant='ghost' colorScheme={'blue'}> Save</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </>
            );
        
    
}
export default ProductForm