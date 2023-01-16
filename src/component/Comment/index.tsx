import React from "react";
import { Box } from "./Box"
import { Container } from "./Container"

const Hi = () => {
  console.log("Hi Rerender");
  
  return <p style={{margin: '10px', color: '#FFF'}}>Hi</p>
}


const CommentInput = () => {
  console.log("CommentInput Rerender");
  
  return <input style={{height: '50%', width: '70%'}}/>
}

const HiAndCommentInput = () => {
  return (
    <>
      <Hi/>
      <CommentInput />
    </>
  )
}
const Memorized = React.memo(HiAndCommentInput)

const LikeNumber = ({like}: {like: number}) => {
  return <span style={{margin: '10px', color: '#FFF', fontWeight: 'bolder'}}>{like}</span>
}

const LikeButton = ({onLike}: {onLike: ()=> void}) => {
  return <button style={{ marginRight:'5px', height: '50%'}} onClick={onLike}>like</button>
}

export interface CommentProps {
  like: number
  onLike: () => void
}

export default function Comment({like, onLike}: CommentProps) {
  console.log("Comment Rerender");
  
  return (
    <Container>
      <Box>
        <Memorized/>
        <LikeNumber like={like}/>
        <LikeButton onLike={onLike}/>
      </Box>
    </Container>
  )
}