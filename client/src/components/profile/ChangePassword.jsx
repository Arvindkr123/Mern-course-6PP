import { Container, Heading, VStack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
const ChangePassword = () => {
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  return (
    <Container py="16" minH={"90vh"}>
      <form>
        <Heading
          my={16}
          textTransform={"uppercase"}
          textAlign={["center", "left"]}
        >
          Chnage Password
        </Heading>
        <VStack spacing={8}>
          <Input
            required
            type="password"
            id="password"
            value={password}
            placeholder="Enter old password"
            onChange={(e) => setPassword(e.target.value)}
            focusBorderColor="yellow.500"
          />
          <Input
            required
            type="password"
            id="password"
            value={newPassword}
            placeholder="Enter new password"
            onChange={(e) => setNewPassword(e.target.value)}
            focusBorderColor="yellow.500"
          />
          <Button w="full" colorScheme="yellow" type="submit">
            Chnage
          </Button>
        </VStack>
      </form>
    </Container>
  );
};
export default ChangePassword;
