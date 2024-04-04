import {
  Avatar,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
  Box,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import IntroVideo from "../../assets/video/Advanced TypeScript Types for Next.js_ The Complete Guide to Elevated Web Development.mp4";
import { RiSecurePaymentFill } from "react-icons/ri";
import { termandconditiondata } from "../../assets/docs/termsAndCondition";

const TermAndCondition = ({ termandcondition }) => (
  <Box overflowY={"scroll"}>
    <Heading
      children="Terms & Conditions"
      size={"md"}
      textAlign={["center", "left"]}
      my={4}
    />
    <Box h="sm" p="4">
      <Text
        fontFamily={"heading"}
        textAlign={["center", "left"]}
        letterSpacing={"widest"}
      >
        {termandcondition}
      </Text>
      <Heading
        my="4"
        size={"md"}
        children="Refund only applicable for cancellation within 7 days."
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={"container.lg"} padding={16} boxShadow={"lg"}>
      <Heading children="About Us" textAlign={["center", "left"]} />
      <Founder />
      <Stack m="8" direction={["column", "row"]} alignItems={"center"}>
        <Text
          fontFamily={"cursive"}
          children="We are a video streaming platform with some premium courses available for premium users."
        />
        <Link to="/subscribe">
          <Button variant={"ghost"} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />

      {/* Terms and Conditions Component start here.... */}
      <TermAndCondition termandcondition={termandconditiondata} />
      {/* Terms and Conditions Component end here.... */}

      <HStack my="4" padding={4}>
        <RiSecurePaymentFill />
        <Heading
          size={"xs"}
          fontFamily={"sans-serif"}
          children="Payment is secured by RazorPay"
          textTransform={"uppercase"}
        />
      </HStack>
    </Container>
  );
};
export default About;

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay={true}
      muted
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={IntroVideo}
    ></video>
  </Box>
);

const Founder = () => {
  return (
    <Stack direction={["column", "row"]} spacing={[4, 16]} padding={8}>
      <VStack>
        <Avatar
          src="https://avatars.githubusercontent.com/u/74539541?v=4"
          boxSize={[40, 48]}
        />
        <Text children="Co-Founder" opacity={0.7} />
      </VStack>
      <VStack justifyContent={"center"} alignItems={["center", "flex-start"]}>
        <Heading children="Arvind Kumar" opacity={0.7} size={["md", "xl"]} />
        <Text children="Hi, I am Full Stack Developer and Teacher. Our Mission is to provide you quality content with reasonable price." />
      </VStack>
    </Stack>
  );
};
