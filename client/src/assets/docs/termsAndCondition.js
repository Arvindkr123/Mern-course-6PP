export const termandconditiondata = `
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
    const isAuthenticated = false;
    const user = { role: "admin" };
  
    const logoutHandler = () => {
      onClose();
    };
  
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
                <LinkButtons onClose={onClose} url="/" title="Home" />
                <LinkButtons
                  onClose={onClose}
                  url="/courses"
                  title="Browse Courses"
                />
                <LinkButtons
                  onClose={onClose}
                  url="/request"
                  title="Request a Course"
                />
                <LinkButtons
                  onClose={onClose}
                  url="/contact"
                  title="Contact Us"
                />
                <LinkButtons onClose={onClose} url="/about" title="About" />
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
                          <Link to="/profile" onClick={onClose}>
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
                          <Link onClick={onClose} to="/admin/dashboard">
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
                      <Link onClick={onClose} to="/login">
                        <Button colorScheme="yellow">Login</Button>
                      </Link>
                      <p>Or</p>
                      <Link onClick={onClose} to="/register">
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
  
  function LinkButtons({ url = "/", title = "Home", onClose }) {
    return (
      <Link to={url} onClick={onClose}>
        <Button variant={"ghost"}>{title}</Button>
      </Link>
    );
  }
  
`;
