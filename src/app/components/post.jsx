import React from "react";
import { useHistory } from "react-router-dom";

const Post = ({ id, posts }) => {
  const history = useHistory();
  const getPostById = (id) => {
    return posts.find((post) => post.id.toString() === id);
  };
  const post = getPostById(id);
  const handleSave = () => {
    history.push("/posts");
  };
  return (
    <>
      <h2>{post ? post.label : "post with id not found"}</h2>
      <button
        onClick={() => {
          handleSave();
        }}
      >
        Сохранить
      </button>
    </>
  );
};

export default Post;
