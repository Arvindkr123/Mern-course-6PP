import { Container, Heading, VStack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
const UpdateProfile = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  return (
    <Container py="16" minH={"90vh"}>
      <form>
        <Heading
          my={16}
          textTransform={"uppercase"}
          textAlign={["center", "left"]}
        >
          Update Profile
        </Heading>
        <VStack spacing={8}>
          <Input
            required
            type="text"
            id="name"
            value={name}
            placeholder="Enter ur name"
            onChange={(e) => setName(e.target.value)}
            focusBorderColor="yellow.500"
          />
          <Input
            required
            type="email"
            id="email"
            value={email}
            placeholder="Enter ur email"
            onChange={(e) => setEmail(e.target.value)}
            focusBorderColor="yellow.500"
          />

          <Button w="full" colorScheme="yellow" type="submit">
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};
export default UpdateProfile;
