import React from "react";
import XIcon from '@mui/icons-material/X';
import SidebarOption from "./SidebarOption";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';
import { Button } from "@mui/material";
import './Sidebar.css'
const  Sidebar= ()=>{

    return(
        <div className="sidebar">
             {/* Twitter icon */}
            
             <XIcon  color="primary" id="icon"/>

             <div style={{ color: 'White' }}>
            
            <SidebarOption Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon}  text="Notification"/>
            <SidebarOption Icon={MailOutlineIcon}  text="Message"/>
            <SidebarOption Icon={PeopleAltIcon}  text="Community"/>
            <SidebarOption Icon={PersonOutlineIcon}  text="profile"/>
            <SidebarOption Icon={MoreHorizRoundedIcon}  text="More"/>
            </div>
            
            
            <Button variant="outlined" id ="button" fullWidth>POST</Button>
            {/*Button*/}
        </div>
    )
}

export default Sidebar;