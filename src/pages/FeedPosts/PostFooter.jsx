import { useState } from "react";

const PostFooter = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleClick = () => {
    if (liked) {
      setLiked(false);
      setLikes(liked - 1);
    }
  };
  return <div>PostFooter</div>;
};

export default PostFooter;
