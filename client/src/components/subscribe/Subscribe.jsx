import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const Subscribe = () => {
  return (
    <Container h="90vh" p="16">
      <Heading children="Welcome" my="8" textAlign={["center"]} />
      <VStack
        boxShadow={"lg"}
        alignItems={"stretch"}
        borderRadius={"lg"}
        spacing={"0"}
      >
        <Box bg="yellow.400" p="4" css={{ borderRadius: "8px 8px 0 0" }}>
          <Text color="black" children="Pro Pack - 299.00 RS" />
        </Box>
        <Box p="4">
          <VStack textAlign={"center"} px="8" mt="4" spacing={8}>
            <Text children="Join pro pack and get Access to all content.." />
            <Heading size="md">299.00 RS Only</Heading>
          </VStack>
          <Button my="8" w="full" colorScheme="yellow">
            Buy Now
          </Button>
        </Box>
        <Box bg="blackAlpha.600" p="4" css={{ borderRadius: "0 0 8px 8px" }}>
          <Heading size="md" textTransform={"uppercase"} color="white">
            100 % refund at the Cancellation
          </Heading>
          <Text fontSize={"xs"} color="white">
            *Terms and Conditions Apply
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};
export default Subscribe;
