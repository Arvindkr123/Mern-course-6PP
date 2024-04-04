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

const RequestCourse = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [course, setCourse] = useState();
  return (
    <Container h="92vh">
      <VStack h="full" justifyContent={"center"} spacing={16}>
        <Heading children="Request Course Form" textTransform={"uppercase"} />
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
            <FormLabel htmlFor="course" children="Course" />
            <Textarea
              required
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              placeholder="Explain the Course..."
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button my="4" fontSize={"sm"} colorScheme="yellow" type="submit">
            Request Course
          </Button>
          <Box my="4">
            See available Course!{" "}
            <Link to="/courses">
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
export default RequestCourse;
