import {
  Container,
  Heading,
  VStack,
  Box,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  return (
    <Container h="92vh">
      <VStack h="full" justifyContent={"center"} spacing={16}>
        <Heading children="Contact Us" textTransform={"uppercase"} />
        <form style={{ width: "100%" }}>
          <Box my={4}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter ur name"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={4}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="abc@example.com"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={4}>
            <FormLabel htmlFor="message" children="Message" />
            <Textarea
              required
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message..."
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button my="4" fontSize={"sm"} colorScheme="yellow" type="submit">
            Contact Us
          </Button>
          <Box my="4">
            Request for a Course?{" "}
            <Link to="/request">
              <Button colorScheme="yellow.500" variant={"link"}>
                Click here
              </Button>
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};
export default Contact;
