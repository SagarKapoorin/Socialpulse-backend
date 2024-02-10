// SINGLE POST STRUCTURE TO BE USE IN POSTSWIDGET.JSX
import {
    ChatBubbleOutlineOutlined,
    FavoriteBorderOutlined,
    FavoriteOutlined,
    ShareOutlined,
  } from "@mui/icons-material";
  import Stack from '@mui/material/Stack';
  import AddCommentIcon from '@mui/icons-material/AddComment';
  import Button from '@mui/material/Button';
  import TextField from '@mui/material/TextField';
  import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
  import ShareC from "../../components/Share";
  import FlexBetween from "../../components/FlexBetween";
  import Friend from "../../components/Friend";
  import WidgetWrapper from "../../components/WidgetWrapper";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { setPost } from "../../state";
  
  const PostWidget = ({
    postId,
    postUserId,
    name,
    description,
    location,
    picturePath,
    userPicturePath,
    likes,
    comments,
  }) => {
    const [isComments, setIsComments] = useState(false);   //if person want to see comments
    const [Comment, SetComment]=useState(comments);
    const [inputValue, setInputValue] = useState('');
    const [newComment, SetnewComment]=useState(false);
    const [isShare, setIsShare]=useState(false);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const loggedInUserId = useSelector((state) => state.user._id);
    const isLiked = Boolean(likes[loggedInUserId]);
    const likeCount = Object.keys(likes).length;
  
    const { palette } = useTheme();
    const main = palette.neutral.main;
    const primary = palette.primary.main;
//   deals with likes
    const patchLike = async () => {
      const response = await fetch(`http://localhost:8080/posts/${postId}/like`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: loggedInUserId }),
      });
      const updatedPost = await response.json();
      dispatch(setPost({ post: updatedPost }));
    };
    //add comment 
    const addComment=(newComment)=>{
     SetComment((prevcomment)=>[...prevcomment,newComment]);
     console.log(Comment);
    }
    const patchComment=async(C)=>{
      addComment(C);
      const response = await fetch(`http://localhost:8080/posts/${postId}/comment`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body:JSON.stringify({  C }),
      });
      const updatedPost = await response.json();
      // console.log(updatedPost)
      const check=dispatch(setPost({ post: updatedPost }));
      // console.log(check);
    };
    //handle change
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      if(inputValue.length>0){
        patchComment(inputValue);
        setInputValue('');
      }
    };
    return (
      <WidgetWrapper m="2rem 0">
        <Friend
          friendId={postUserId}
          name={name}
          subtitle={location}
          userPicturePath={userPicturePath}
        />
        <Typography color={main} sx={{ mt: "1rem" }}>
          {description}
        </Typography>
        {picturePath && (
          <img
            width="100%"
            height="auto"
            alt="post"
            style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
            src={`http://localhost:8080/assets/${picturePath}`}
          />
        )}
        <FlexBetween mt="0.25rem">
          <FlexBetween gap="1rem">
            <FlexBetween gap="0.3rem">
              <IconButton onClick={patchLike}>
                {isLiked ? (
                  <FavoriteOutlined sx={{ color: primary }} />
                ) : (
                  <FavoriteBorderOutlined />
                )}
              </IconButton>
              <Typography>{likeCount}</Typography>
            </FlexBetween>
            <FlexBetween gap="0.3rem">
              <IconButton onClick={() => setIsComments(!isComments)}>
                <ChatBubbleOutlineOutlined />
              </IconButton>
              <Typography>{Comment.length}</Typography>
            </FlexBetween>

            <IconButton onClick={()=> SetnewComment(!newComment)}>
          <AddCommentIcon/>
          </IconButton>
          </FlexBetween>
  
          <IconButton>
            <ShareOutlined  onClick={() => setIsShare(!isShare)}/>
          </IconButton>
  
          
        </FlexBetween>
        {isComments && (
          <Box mt="0.5rem">
            {Comment.map((comment, i) => (
              <Box key={`${name}-${i}`}>
                <Divider />
                <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                  {comment}
                </Typography>
              </Box>
            ))}
            <Divider />
          </Box>
        )}
        {newComment &&
          <Box textAlign={"center"}>
            <form onSubmit={handleSubmit} >
                  <TextField id="standard-basic" label="Comment" variant="standard"  value={inputValue}
                      onChange={handleChange} fullWidth="300px"/>
                    <Stack spacing={1} direction="column" m="1rem">
                      <Button variant="contained" type="Submit">Submit</Button>
                    </Stack>
             </form>
            </Box>
        }
        {isShare && <ShareC/>}
      </WidgetWrapper>
    );
  };
  
  export default PostWidget;