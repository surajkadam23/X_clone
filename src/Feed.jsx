import React from "react";
import './Feed.css'
import TweetBox from "./TweetBox";
import Post from "./Post.jsx"

function Feed(){
    return(
        
        <div className="feed">
            <div style={{ color: 'white' }} className="feed_header">
           <h2><span class="for">For you</span> <span class="following">Following</span></h2></div>
            <TweetBox />

   
            <Post />

        </div>
        

    )
}

export default Feed;