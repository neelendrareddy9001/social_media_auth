import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPostss from "../FeedPosts/FeedPostss";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <FeedPostss />
        </Box>
        <Box
          flex={3}
          mr={20}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
          border={"1px solid red"}
        >
          Suggested Users
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
