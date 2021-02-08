import './Sidebar.css'
import SidebarItem from './SidebarItem'
import { IoLogoTwitter } from 'react-icons/io'
import { RiHome7Fill, RiFileList2Line } from 'react-icons/ri'
import { HiHashtag, HiOutlineMail } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'
import { CgProfile, CgMoreO } from 'react-icons/cg' 

import { useStateValue } from './StateProvider'
import { auth } from "./firebase";
import { Link } from "react-router-dom";



import React from 'react'

function Sidebar() {

    const [{ user }, dispatch] = useStateValue()

    /*const add = () => {
        dispatch({
            type: 'ADD',
            item: 1
        })
    }*/

    const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

    return (
        <div className="sidebar">
            <Link to="/">
                <button onClick={handleAuthenticaton}>Sign out</button>
            </Link>
            <IoLogoTwitter className="sidebar__logo" />

            <div className="sidebar__itemList">
                <SidebarItem Icon={ RiHome7Fill } name="Home" />
                <SidebarItem Icon={ HiHashtag } name="Explore" />
                <SidebarItem Icon={ FiBell } name="Notifications" />
                <SidebarItem Icon={ HiOutlineMail } name="Messages" />
                <SidebarItem Icon={ BsBookmark } name="Bookmarks" />
                <SidebarItem Icon={ RiFileList2Line } name="Lists" />
                <SidebarItem Icon={ CgProfile } name="Profile" />
                <SidebarItem Icon={ CgMoreO } name="More" />
            </div>

            <div className="sidebar__tweetBtn">Tweet</div>
        </div>
    )
}

export default Sidebar
