import { Box, HStack, Heading, Stack, VStack } from "@chakra-ui/react";
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import { DiGithub } from "react-icons/di";
const Footer = () => {
  return (
    <Box padding={4} bg="blackAlpha.900" minH={"10vh"}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={["center", "flex-start"]} width={"100%"}>
          <Heading children="All Rights Reserved" color={"white"} />
          <Heading
            children="@Arvind Kumar"
            color={"yellow.400"}
            fontFamily={"body"}
            size={"sm"}
          />
        </VStack>
        <HStack
          spacing={["2", "10"]}
          justifyContent={"center"}
          color={"white"}
          fontSize={50}
        >
          <a href="https://www.youtube.com" target="_blank">
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com/Arvindkr123" target="_blank">
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};
export default Footer;
