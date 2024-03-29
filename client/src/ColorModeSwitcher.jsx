import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorMode("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  return (
    <IconButton
      size={"md"}
      fontSize={"lg"}
      color={"current"}
      aria-label={`Switch to ${text} Mode`}
      variant={"ghost"}
      content={text}
      onClick={toggleColorMode}
      //   marginLeft={"2"}
      position={"fixed"}
      top="4"
      right="4"
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
export default ColorModeSwitcher;
