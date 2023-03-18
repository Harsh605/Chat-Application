import React from "react";
import LoginDialog from "./account/LoginDialog";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";

const Component = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;

const ChatHeader = styled(AppBar)`
  height: 125px;
  background-color: #00bfa5;
  box-shadow: none;
`;
const LoginHeader = styled(AppBar)`
  height: 230px;
  background-color: #00bfa5;
  box-shadow: none;
`;
const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <>
      <Component>
        {
        account ?
          <>
            <ChatHeader>
              <Toolbar>

              </Toolbar>
            </ChatHeader>
          <ChatDialog />
          </>
          :
          <>
            <LoginHeader>
              <Toolbar></Toolbar>
            </LoginHeader>
            <LoginDialog />
          </>
        }
      </Component>
    </>
  );
};

export default Messenger;
