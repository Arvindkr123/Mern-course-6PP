import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState();
  return (
    <Container padding={16} h="95vh">
      <form>
        <Heading
          children="Forget Password"
          my={16}
          textTransform={"uppercase"}
          textAlign={["center", "left"]}
        />
        <VStack spacing={8}>
          <Input
            required
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="abc@example.com"
            focusBorderColor="yellow.500"
          />
          <Button w={"full"} colorScheme="yellow" type="submit">
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};
export default ForgetPassword;
