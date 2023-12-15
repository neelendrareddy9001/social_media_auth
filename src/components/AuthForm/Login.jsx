import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [Inputs, setInput] = useState({
    email: "",
    password: "",
  });
  const [loading, error, login] = useLogin();
  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        size={"sm"}
        value={Inputs.email}
        onChange={(e) => setInput({ ...Inputs, email: e.target.value })}
      />
      <Input
        placeholder="Password"
        fontSize={14}
        size={"sm"}
        type="password"
        value={Inputs.password}
        onChange={(e) => setInput({ ...Inputs, password: e.target.value })}
      />
      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}
      <Button
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
        isLoading={loading}
        onClick={() => Login(Inputs)}
      >
        Log in
      </Button>
    </>
  );
};

export default Login;
