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
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Container h={"95vh"}>
      <VStack h={"full"} justifyContent={"center"} spacing={16}>
        <Heading children="Welcome to CourseBundler" />
        <form style={{ width: "100%" }}>
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
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box>
            <Link to="/forgetpassword">
              <Button fontSize={"sm"} variant={"link"}>
                Forget Passwowd?
              </Button>
            </Link>
          </Box>
          <Button
            my="4"
            fontSize={"sm"}
            variant={"ghost"}
            colorScheme="yellow"
            type="submit"
          >
            Login
          </Button>
          <Box my="4">
            New User ?{" "}
            <Link to="/register">
              <Button fontSize={"sm"} colorScheme="yellow" variant={"link"}>
                Signup
              </Button>{" "}
            </Link>
            here
          </Box>
        </form>
      </VStack>
    </Container>
  );
};
export default Login;
