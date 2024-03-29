import {
  Stack,
  HStack,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
import { CgGoogle, CgYoutube } from "react-icons/cg";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { DiAws } from "react-icons/di";
import "./home.css";
import vg from "../../assets/images/Arvind.jpg";
import IntroVideo from "../../assets/video/Advanced TypeScript Types for Next.js_ The Complete Guide to Elevated Web Development.mp4";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={["column", "row"]}
          height={"100%"}
          justifyContent={["center", "space-between"]}
          alignItems={"center"}
          spacing={["16", "56"]}
        >
          <VStack
            width={"full"}
            alignItems={["center", "flex-end"]}
            spacing={8}
          >
            <Heading children="LEARN FROM THE EXPERTS" fontSize={'5xl'} />
            <Text
              textAlign={["center", "left"]}
              fontSize={"2xl"}
              fontFamily={"cursive"}
              children="Find valuable content with reasonable price"
            />
            <Link to="/courses">
              <Button size={"lg"} colorScheme="yellow">
                Expore Now
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphics"
            boxSize={"md"}
            src={vg}
            objectFit={"contain"}
          />
        </Stack>
      </div>
      <Box padding={"8"} bg={"blackAlpha.800"}>
        <Heading
          children="OUR BRANDS"
          textAlign={"center"}
          fontFamily={"body"}
          color={"yellow.400"}
        />
        <HStack
          className="brandsBanner"
          justifyContent={"space-evenly"}
          marginTop="4"
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <div className="container2">
        <video
          //autoPlay={true}
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={IntroVideo}
        ></video>
      </div>
    </section>
  );
};
export default Home;
