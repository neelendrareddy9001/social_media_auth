import React from "react";
import Home from "./Home";
import Search from "./Search";
import CreatePost from "./CreatePost";
import ProfileLink from "./ProfileLink";
import Notification from "./Notification";

const SidebarItems = () => {
  return (
    <>
      <Home />
      <Search />
      <Notification />
      <CreatePost />
      <ProfileLink />
    </>
  );
};

export default SidebarItems;
