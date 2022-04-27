import React from "react";

const Post = ({ id, posts }) => {
  //const postId = match.params.id;
  const getPostById = (id) => {
    return posts.find((post) => post.id.toString() === id);
  };
  const post = getPostById(id);
  return <h2>{post ? post.label : "post with id not found"}</h2>;
};

export default Post;
