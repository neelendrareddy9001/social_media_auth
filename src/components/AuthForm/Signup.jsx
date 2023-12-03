import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";

const Signup = () => {
  const [Inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShwoPassword] = useState(false);

  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        mb={4}
        color={"white"}
        fontWeight={400}
        borderRadius={"8px"}
        type="email"
        size={"sm"}
        value={Inputs.email}
        onChange={(e) => setInputs({ ...Inputs, email: e.targetvalue })}
      />
      <Input
        placeholder="Username"
        fontSize={14}
        mb={4}
        color={"white"}
        fontWeight={400}
        borderRadius={"8px"}
        type="text"
        size={"sm"}
        value={Inputs.userName}
        onChange={(e) => setInputs({ ...Inputs, userName: e.target.value })}
      />
      <InputGroup>
        <Input
          placeholder="Password"
          fontSize={14}
          mb={4}
          color={"white"}
          fontWeight={400}
          borderRadius={"8px"}
          type={showPassword ? "text" : "password"}
          value={Inputs.password}
          size={"sm"}
          onChange={(e) => setInputs({ ...Inputs, password: e.target.value })}
        />
        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => setShwoPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
        // isLoading={loading}
      >
        Signup
      </Button>
    </>
  );
};

export default Signup;
