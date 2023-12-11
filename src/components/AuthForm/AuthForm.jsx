import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Singup from "./Signup";
import GoogleAuth from "./GoogleAuth";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleAuth = () => {
    if (!Inputs.email || !Inputs.password) {
      alert("Please fill all the fields");
      console.log("inputs", Inputs);
      return;
    }

    navigate("/");
  };

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="instagram" />

          {isLogin ? <Login /> : <Singup />}

          {/* ----- OR ---------- */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"} />
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>

        {/* <Flex
          alignItems={"center"}
          justifyContent={"center"}
          cursor={"pointer"}
        >
          <Image src="/google.png" w={5} alt="Google logo" />
          <Text mx={2} color={"blue.500"}>
            Log in with Google
          </Text>
        </Flex> */}
      </Box>
    </>
  );
};

export default AuthForm;
