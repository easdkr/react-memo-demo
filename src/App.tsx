import React, { useState } from "react";
import Comment, { CommentProps } from "./component/Comment";
export default function App() {
  const [like, setLike] = useState(0)
  const commentProps : CommentProps = {
    like,
    onLike: ()=> setLike(like + 1)
  }
  console.log("App rerender");
  
  return <Comment {...commentProps} />;
}
