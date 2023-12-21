import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import useUserProfileStore from "../../Store/userProfileStore";

const ProfileHeader = () => {
  const { userProfile } = useUserProfileStore();

  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={auto}
      >
        <Avatar
          src={userProfile.profilePicUrl}
          alignItems="As a programmer logo "
        />
      </AvatarGroup>
    </Flex>
  );
};

export default ProfileHeader;
