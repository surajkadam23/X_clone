import React from "react";
import './Tweetbox.css';
import { Avatar, Button} from "@mui/material";

function TweetBox(){
    return(
        <div className="tweetbox" >
        
            <form>
                <div className="tweetbox_input">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
             
                <input    placeholder="write a message" type="text"></input>
                
                </div>
                <Button className="tweetbox_button">POST</Button>
            </form>
            
        </div>

    )
}

export default TweetBox;