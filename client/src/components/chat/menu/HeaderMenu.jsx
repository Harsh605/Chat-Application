import React from 'react'
import {MoreVert} from '@mui/icons-material';
import {Menu,MenuItem,styled} from '@mui/material';
import { useState } from 'react';

const MenuOption= styled(MenuItem)`
font-size:14px;
padding:15px 60px 5px 24px;
color:#4a4a4a
`


const HeaderMenu = () => {
    const [open,setOpen]= useState(null)
    const open1 = Boolean(open);

    const handleClick=(e)=>{
        setOpen(e.currentTarget);
        console.log(e.target,e.currentTarget)
    }
    const handleClose=()=>{

    }
  return (
    <>
        <MoreVert onClick={handleClick}/>
        <Menu
        anchorEl={open}
        open={open1}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
            vertical:"bottom",
            horizontal:"center"
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:"right"
        }}
      >
        <MenuOption onClick={handleClose}>Profile</MenuOption>
        <MenuOption onClick={handleClose}>My account</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
      </Menu>
    </>
  )
}

export default HeaderMenu