import { Badge, Box, Button, Flex, Grid, Heading, Image, Input, Select, Stack, Text, useToast } from "@chakra-ui/react";
import { FaPlus, FaStar, FaUserCircle, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 20,
    brand: "Brand A",
    stock: 10,
    rating: 4,
    reviews: [
      { user: "Alice", content: "Great quality!" },
      { user: "Bob", content: "Fits well." },
    ],
  },
  {
    id: 2,
    name: "Jeans",
    price: 50,
    brand: "Brand B",
    stock: 0,
    rating: 5,
    reviews: [{ user: "Charlie", content: "Very comfortable." }],
  },
];

const Index = () => {
  const toast = useToast();

  const handleLogin = () => {
    toast({
      title: "Logged in successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleLogout = () => {
    toast({
      title: "Logged out successfully.",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleAddProduct = () => {
    toast({
      title: "Product added successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading>Clothing Store</Heading>
        <Stack direction="row" spacing={4}>
          <Button leftIcon={<FaSignInAlt />} onClick={handleLogin}>
            Login
          </Button>
          <Button leftIcon={<FaUserCircle />} colorScheme="pink">
            Become a Seller
          </Button>
          <Button leftIcon={<FaSignOutAlt />} onClick={handleLogout}>
            Logout
          </Button>
        </Stack>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} my={10}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMHByb2R1Y3R8ZW58MHx8fHwxNzE0MzMxMDc5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt={product.name} />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                {product.stock === 0 ? (
                  <Badge borderRadius="full" px="2" colorScheme="red">
                    Unavailable
                  </Badge>
                ) : (
                  <Badge borderRadius="full" px="2" colorScheme="green">
                    In Stock
                  </Badge>
                )}
              </Box>
              <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                {product.name}
              </Box>
              <Box>
                ${product.price}
                <Box as="span" color="gray.600" fontSize="sm">
                  / {product.brand}
                </Box>
              </Box>
              <Box d="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <FaStar key={i} color={i < product.rating ? "teal.500" : "gray.300"} />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {product.reviews.length} reviews
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
      <Flex justifyContent="center">
        <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddProduct}>
          Add Product
        </Button>
      </Flex>
    </Box>
  );
};

export default Index;
