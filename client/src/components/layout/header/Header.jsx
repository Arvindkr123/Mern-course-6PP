import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import ColorModeSwitcher from "../../../ColorModeSwitcher";
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const isAuthenticated = true;
  const user = { role: "admin" };

  const logoutHandler = () => {};

  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width={12}
        height={12}
        rounded={"full"}
        position={"fixed"}
        top="6"
        left="6"
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={"blur(2px)"} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={"1px"}>COURSE BUNDLER</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} alignItems={"flex-start"}>
              <LinkButtons url="/" title="Home" />
              <LinkButtons url="/courses" title="Browse Courses" />
              <LinkButtons url="/request" title="Request a Course" />
              <LinkButtons url="/contact" title="Contact Us" />
              <LinkButtons url="/about" title="About" />
              <HStack
                justifyContent={"space-evenly"}
                position={"absolute"}
                bottom={"2rem"}
                width={"80%"}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to="/profile">
                          <Button variant={"ghost"} colorScheme="yellow">
                            Profile
                          </Button>
                        </Link>
                        <Button onClick={logoutHandler} variant={"ghost"}>
                          <RiLogoutBoxLine />
                          logout
                        </Button>
                      </HStack>
                      {user && user.role === "admin" && (
                        <Link to="/admin/dashboard">
                          <Button variant={"ghost"} colorScheme="purple">
                            <RiDashboardFill style={{ margin: "4px" }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button colorScheme="yellow">Login</Button>
                    </Link>
                    <p>Or</p>
                    <Link to="/register">
                      <Button colorScheme="yellow">SignUp</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Header;

function LinkButtons({ url = "/", title = "Home" }) {
  return (
    <Link to={url}>
      <Button variant={"ghost"}>{title}</Button>
    </Link>
  );
}
