import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../home/home.css";
const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={["center", "flex-start"]}>
      <Image src={imageSrc} boxSize={60} objectFit={"contain"} />
      <Heading
        textAlign={["center", "left"]}
        maxW={200}
        fontFamily={"sans-serif"}
        noOfLines={3}
        children={title}
        size={"sm"}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          children={"creator"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
        />
        <Text
          children={creator}
          fontWeight={"body"}
          textTransform={"uppercase"}
        />
      </HStack>
      <Heading
        textAlign={"center"}
        size={"xs"}
        children={`Lectures : ${lectureCount}`}
        textTransform={"uppercase"}
      />
      <Heading
        textAlign={"center"}
        size={"xs"}
        children={`Views : ${views}`}
        textTransform={"uppercase"}
      />
      <Stack direction={["column", "row"]} alignItems={"center"}>
        <Link to={`/course/${id}`}>
          <Button colorScheme={"yellow"}>Watch Now</Button>
        </Link>
        <Button
          variant={"ghost"}
          colorScheme={"yellow"}
          textTransform={"capitalize"}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to PlayList
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState();
  const [category, setCategory] = useState();
  const categories = [
    "web development",
    "Artificial Intelligence",
    "DSA",
    "React JS",
    "Data Science",
    "Data Structure & Algorithms",
    "App Development",
  ];

  const addToPlaylistHandler = (id) => {};
  return (
    <Container minH={"95vh"} maxW={"container.lg"} paddingY={8}>
      <Heading children="All Courses" m="8" />
      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search a Course..."
        type="text"
        focusBorderColor="yellow.500"
      />
      <HStack
        overflow={"auto"}
        paddingY={8}
        css={{ "&::-webkit-scrollbar": { display: "none" } }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={60}>
            <Text children={item.toLocaleUpperCase()} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={["column", "row"]}
        flexWrap={"wrap"}
        justifyContent={["flex-start", "space-evenly"]}
        alignItems={["center", "flex-start"]}
      >
        <Course
          views={1000}
          title="Sample1"
          imageSrc="https://burst.shopifycdn.com/photos/blue-lake-and-rocky-mountains.jpg?width=1000&format=pjpg&exif=0&iptc=0"
          id="1"
          addToPlaylistHandler={addToPlaylistHandler}
          creator={"Arvind Kumar"}
          description="This is good lecture"
          lectureCount={13}
        />
      </Stack>
    </Container>
  );
};
export default Courses;
