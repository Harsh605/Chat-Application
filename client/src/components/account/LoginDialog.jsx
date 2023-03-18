import React, { useState } from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../constant/data";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../service/api";
const Component = styled(Box)`
  display: flex;
`;
const Container = styled(Box)`
  padding: 56px 0 56px 56px;
  flex: 0 0 50%;
`;
const Title = styled(Typography)`
  font-size: 28px;
  font-weight: 100;
  line-height: normal;
  color: #525252;
  margin-bottom: 25px;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    color: #4a4a4a;
    font-size: 18px;
  }
`;
const QrCodeBox = styled(Box)`
display:'flex',
justifyContent:"center",
alignItems:"center",
flex: 0 0 50%,


`;
const QrCode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 50px 0",
});

const dialogStyle = {
  height: "90%",
  marginTop: "12%",
  width: "78%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const LoginDialog = () => {

  const {setAccount} = useContext(AccountContext)

  const onLoginSuccess = async(res) => {
    const decode= jwtDecode(res.credential) ;
    setAccount(decode);
    await addUser(decode)   //api call for addUser

  };
  const onLoginError = () => {
    console.log("Login Error")
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Component>
        <Container>
          <Title>Use WhatsApp on your computer</Title>
          <StyledList>
            <ListItem>1.Open Whatsapp On your Phone</ListItem>
            <ListItem>
              2.Tap Menu or Settings and select Linked Devices
            </ListItem>
            <ListItem>3.Tap on Link a Device</ListItem>
            <ListItem>
              4.Point your phone to this screen to capture the code
            </ListItem>
          </StyledList>
        </Container>
        <QrCodeBox>
          <QrCode src={qrCodeImage} alt="Qr Code to Login" />
          <Box>
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />;
          </Box>
        </QrCodeBox>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
