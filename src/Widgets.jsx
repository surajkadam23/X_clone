import React from "react";
import "./Widgets.css";

import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2 style={{ color: 'white' }}>Subscribe</h2>
        <h2 style={{ color: 'white' }}>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</h2>
        <Button className="button">SUBSCRIBE</Button>

      
      </div>

      <div className="subscribe">
        <h2 style={{ color: 'white' }}>What's happening</h2>

      
      </div>
    </div>
  );
}

export default Widgets;