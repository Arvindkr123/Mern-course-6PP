import {
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState();
  const params = useParams();
  console.log(params.token);
  return (
    <Container padding={16} h="95vh">
      <form>
        <Heading
          children="Reset Password"
          my={16}
          textTransform={"uppercase"}
          textAlign={["center", "left"]}
        />
        <VStack spacing={8}>
          <Input
            required
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter new password"
            focusBorderColor="yellow.500"
          />
          <Button w={"full"} colorScheme="yellow" type="submit">
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
