//this page we are going to display all items

import { Container, VStack,Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'


function HomePage() {
  const {fetchProducts,products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products ",products);
  //above one use for fetching products from the backend
  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400,blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >Current Products 🚀
        </Text>

        {/* for displaying market items */}
        <SimpleGrid
        // md: 2, lg: 3 for medium and large screens
        // base: 1 for small screens
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />))}

        </SimpleGrid>

{/* display this if no products found */}
        {products.length===0 && (
          
        <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
        No products found 😢{" "}
    <Link to='/create'>
          <Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
            Create a product
          </Text>
        </Link>
      </Text>
        )}
        
      </VStack>
    </Container>
  )
}

export default HomePage