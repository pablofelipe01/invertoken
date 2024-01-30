import React from 'react';
import { Text, Container, Button } from "@chakra-ui/react";

const Trade = () => {
  return (
    <Container maxW={"1200px"}>
      <Text mb={4}>Aqui puedes cambiar InverToken</Text>
      <Button as="a" href="https://dexscreener.com/polygon/0x189591bdFFdBAdD188CE9e846d25132F5DCd16e9" target="_blank" colorScheme="blue">
        Open
      </Button>
    </Container>
  );
};

export default Trade;
