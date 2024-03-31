import {
  Avatar,
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

export const fileUploadCSS = {
  cursor: "pointer",
  marginLeft: "-5%",
  width: "110%",
  border: "none",
  height: "100%",
  color: "#ECC94B",
  backgroundColor: "#fff",
};

const fileUploadStyleHandler = {
  "&::file-selector-button": fileUploadCSS,
};

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [image, setImage] = useState();

  const chnageImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImagePreview(reader.result);
      setImage(file);
    };
  };
  return (
    <Container h={"95vh"}>
      <VStack h={"full"} justifyContent={"center"} spacing={16}>
        <Heading children="Registration" textTransform={"uppercase"} />
        <form style={{ width: "100%" }}>
          <Box my={4} display={"flex"} justifyContent={"center"}>
            <Avatar size={"2xl"} src={imagePreview} />
          </Box>
          <Box my={4}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="abc"
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
          <Box my={4}>
            <FormLabel htmlFor="avatar" children="Choose Avatar" />
            <Input
              required
              id="avatar"
              accept="image/*"
              type="file"
              focusBorderColor="yellow.500"
              onChange={chnageImageHandler}
              css={fileUploadStyleHandler}
            />
          </Box>
          <Button
            fontSize={"sm"}
            variant={"ghost"}
            colorScheme="yellow"
            type="submit"
          >
            SignUp
          </Button>
          <Box my="4">
            already have an account ?{" "}
            <Link to="/login">
              <Button fontSize={"sm"} colorScheme="yellow" variant={"link"}>
                login
              </Button>{" "}
            </Link>
            here
          </Box>
        </form>
      </VStack>
    </Container>
  );
};
export default Register;
