import { Dialog,Box,styled } from '@mui/material'
import React from 'react'
import Menu from './menu/Menu';
import EmptyChat from './chat/EmptyChat';


const dialogStyle = {
  height: "95%",
  width: "100%",
  maxWidth: "100%",
  margin: "20px",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  borderRadius:0,
};

const Components= styled(Box)`
display:flex;
`
const LeftComponents= styled(Box)`
min-width:450px;
`
const RightComponents= styled(Box)`
width:73%;
min-width:300px;
height:100%;
border-left:1px solid rgba(0,0,0,0.14)
`

const ChatDialog = () => {
  return (
   <Dialog
   open={true}
   PaperProps={{sx:dialogStyle}}
   hideBackdrop={true}
   maxWidth={"md"}
   >
    <Components>
      <LeftComponents>
        <Menu></Menu>
      </LeftComponents>
      <RightComponents>
        <EmptyChat></EmptyChat>
      </RightComponents>
    </Components>
   </Dialog>
  )
}

export default ChatDialog