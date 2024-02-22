import React from "react";
import { useRouter } from "next/router";
import { data } from '../../utils/data';
import { Container, Flex, SimpleGrid, Button, Image, Heading, Stack, Box, Text, useColorModeValue } from "@chakra-ui/react";

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const product = data.products.find((product) => product.id === parseInt(id));
    
    
    if(!product) {
        return <h2>Product Not Found</h2>
    }
    
    return (
        <Container maxW={'container.xl'} mt={2}>
            <SimpleGrid columns={[1,2]}>
                <Flex>
                    <Image src={`/images${product.image}`} rounded={'md'} fit={'cover'}
                    align={'center'}
                    h={'100%'}
                    alt={product.title}
                    w={{base:'100%', sm:'400px', lg: '500px'}}
                    >
                        
                    </Image>
                </Flex>
                <Stack spacing={{ base: 6, md: 10}}>
                    <Box as={'header'}>
                        <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm:'4xl', lg: '5xl'}}
                        >
                        {product.title}
                        </Heading>
                        <Text color={useColorModeValue('gray.900', 'gray.400')} fontSize={'xl'}>
                            {`$${product.price} USD`}
                        </Text>
                        
                    </Box>
                    <Text color={useColorModeValue('gray.600', 'gray.200')} fontSize={'xl'}>
                            {product.description}
                        </Text>
                        <Flex flexGrow={1} alignItems={'end'}>
                            <Button rounded={'md'}
                            w={'full'}
                            mt={9}
                            size={'lg'}
                            py={'7'}
                            bg={useColorModeValue('gray.800', 'gray.50')}
                            color={useColorModeValue('white', 'gray.800')}
                            textTransform={'uppercase'}
                            >Add to Cart</Button>
                        </Flex>    
                </Stack>
            </SimpleGrid>
        </Container>
    )
}

export default ProductPage