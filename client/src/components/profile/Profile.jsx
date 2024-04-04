import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  VStack,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
  useDisclosure,
  ModalHeader,
} from "@chakra-ui/react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { fileUploadCSS } from "./../auth/register/Register";
import { useState } from "react";

const Profile = () => {
  const user = {
    name: "Arvind Kumar",
    email: "thakurarvindkr10@gmail.com",
    createdAt: String(new Date().toISOString()),
    role: "user",
    subscription: {
      status: "active",
    },
    playlist: [
      {
        id: 1,
        course: "Web Development",
        poster:
          "https://images.pexels.com/photos/20608085/pexels-photo-20608085/free-photo-of-porto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  };

  const removeCourseFromPlayListHandler = (id) => {
    console.log(id);
  };
  const changeImageSubmitHandler = (e, file) => {
    e.preventDefault();
    console.log(file);
  };

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Container minH={"95vh"} maxW={"container.lg"} py="8">
      <Heading m="8" textTransform={"uppercase"}>
        Profile
      </Heading>

      {/* -------------- profile related content start ------------------- */}
      <Stack
        justifyContent={"flex-start"}
        direction={["column", "row"]}
        alignItems={"center"}
        spacing={["8", "16"]}
        padding={8}
      >
        <VStack>
          <Avatar boxSize={48}></Avatar>
          <Button onClick={onOpen} colorScheme="yellow" variant="ghost">
            Change Photo
          </Button>
        </VStack>

        <VStack spacing="4" alignItems={["center", "flex-start"]}>
          <HStack>
            <Text children="Name" fontWeight={"bold"}></Text>
            <Text children={user.name}></Text>
          </HStack>
          <HStack>
            <Text children="Email" fontWeight={"bold"}></Text>
            <Text children={user.email}></Text>
          </HStack>
          <HStack>
            <Text children="CreatedAt" fontWeight={"bold"}></Text>
            <Text children={user.createdAt.split("T")[0]}></Text>
          </HStack>
          {user.role !== "admin" && (
            <HStack>
              <Text children="Subscription" fontWeight={"bold"}></Text>
              {user.subscription.status === "active" ? (
                <Button colorScheme="yellow">Cancel Subscription</Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme="yellow">Susbcribe</Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={["column", "row"]} alignItems={"center"}>
            <Link to="/updateprofile">
              <Button>Update Profile</Button>
            </Link>
            <Link to="/changepassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      {/* -------------- profile related content end------------------- */}

      {/* --------------- user playlist start here ---------------- */}

      <Heading size={"md"} my="8">
        Playlist
      </Heading>

      {user.playlist.length > 0 && (
        <Stack
          direction={["column", "row"]}
          alignItems={"center"}
          flexWrap={"wrap"}
          p="4"
        >
          {user.playlist.map((element) => (
            <VStack key={element.id} w="48" m="2">
              <Image
                boxSize={"full"}
                objectFit={"contain"}
                src={element.poster}
              />
              <HStack>
                <Link to={`/course/${element.id}`}>
                  <Button colorScheme="yellow" variant={"ghost"}>
                    Watch Now
                  </Button>
                </Link>
                <Button
                  onClick={() => removeCourseFromPlayListHandler(element.id)}
                  colorScheme="yellow"
                  variant={"ghost"}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
      {/* --------------- user playlist end here ---------------- */}

      <ChangePhotoBox
        isOpen={isOpen}
        onClose={onClose}
        changeImageSubmitHandler={changeImageSubmitHandler}
      />
    </Container>
  );
};
export default Profile;

const ChangePhotoBox = ({ isOpen, onClose, changeImageSubmitHandler }) => {
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const closeHandler = () => {
    onClose();
    setImagePrev("");
    setImage("");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter={"blur(10px)"} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={(e) => changeImageSubmitHandler(e, image)}>
              <VStack spacing={8}>
                {imagePrev && <Avatar src={imagePrev} boxSize={48} />}
                <Input
                  type="file"
                  onChange={changeImageHandler}
                  css={{ "&::file-selector-button": fileUploadCSS }}
                />
                <Button w="full" colorScheme="yellow" type="submit">
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button m="3" onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
