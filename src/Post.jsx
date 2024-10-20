import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import EqualizerIcon from '@mui/icons-material/Equalizer';

const Post = forwardRef(
    ({ displayName, username, verified, text, image, avatar }, ref) => {
      return (
        <div className="post" ref={ref}>
          <div className="post__avatar">
            <Avatar src={avatar} />
          </div>
          <div className="post__body">
            <div className="post__header">
              <div className="post__headerText">
                <h3  style={{ color: 'white' }}>
                  Suraj Kadam{" "}
                  <span  className="post__headerSpecial">
                    {verified && <VerifiedIcon className="post__badge" />} @Sk23
                    {username}
                  </span>
                </h3>
              </div>
              <div  style={{ color: 'white' }} className="post__headerDescription">
                <p>This is suraj tweet</p>
              </div>
            </div>
            <img src="https://img.freepik.com/free-photo/view-3d-car_23-2150998591.jpg?semt=ais_hybrid" alt="" />
            <div style={{ color: 'white' }}>
            <div className="post__footer">
            
              <ChatBubbleOutlineIcon fontSize="small" />
              <RepeatIcon fontSize="small" />
              <FavoriteBorderIcon fontSize="small" />
              <EqualizerIcon fontSize="small" />
              <BookmarkBorderIcon fontSize="small" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  );
  
  export default Post;