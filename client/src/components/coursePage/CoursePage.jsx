import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import IntroVideo from "../../assets/video/Advanced TypeScript Types for Next.js_ The Complete Guide to Elevated Web Development.mp4";
import { useState } from "react";
const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);
  let lectures = [
    {
      _id: "asdfbasdfjhbas",
      title: "sample",
      description: "asdhfjyasdfjhbasdfjahsbdfasjhdfasjhdfadjfhadjfhas",
      video: {
        url: "adbsadfhjbasdf",
      },
    },
    {
      _id: "asdfbasdfjhbas2",
      title: "sample2",
      description: "asdhfjyasdfjhbasdfjahsbdfasjhdfasjhdfadjfhadjfhas2",
      video: {
        url: "adbsadfhjbasdf",
      },
    },
    {
      _id: "asdfbasdfjhbas3",
      title: "sample3",
      description: "asdhfjyasdfjhbasdfjahsbdfasjhdfasjhdfadjfhadjfhas3",
      video: {
        url: "adbsadfhjbasdf",
      },
    },
    {
      _id: "asdfbasdfjhbas4",
      title: "sample4",
      description: "asdhfjyasdfjhbasdfjahsbdfasjhdfasjhdfadjfhadjfhas4",
      video: {
        url: "adbsadfhjbasdf",
      },
    },
  ];
  return (
    <Grid minH={"90vh"} templateColumns={["1fr ", "3fr 1fr"]}>
      <Box>
        <video
          //autoPlay={true}
          width={"100%"}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={IntroVideo}
        ></video>
        <Heading m="4">
          #{lectureNumber + 1} {lectures[lectureNumber].title}
        </Heading>
        <Heading m="4">Description</Heading>
        <Text m="4">{lectures[lectureNumber].description}</Text>
      </Box>
      <VStack>
        {lectures.map((item, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            style={{
              width: "100%",
              padding: "1rem",
              textAlign: "center",
              margin: 0,
              borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
            }}
            key={item._id}
          >
            <Text noOfLines={1}>
              {index + 1} {item.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};
export default CoursePage;
