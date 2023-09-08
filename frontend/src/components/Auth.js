import React, { useState } from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { signInWithGooglePopup } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { toggleCart } from "../redux/cartSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import PersonIcon from "@mui/icons-material/Person";

function Auth() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(localStorage.getItem("user"));
  const [userPhoto, seUserPhoto] = useState(
    JSON.parse(localStorage.getItem("user"))?.photoURL
  );

  // console.log(localStorage.getItem("user"));
  const handleClick = (event) => {
    setIsOpen(event.currentTarget);
  };
  const handleClose = () => {
    setIsOpen(null);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
        seUserPhoto(null);
        // localStorage.removeItem("user");
        localStorage.clear();
      })
      .catch((error) => {});
  };

  const logGoogleUser = async () => {
    if (localStorage.getItem("user")) {
      seUserPhoto(localStorage.getItem("user").photoURL);
    } else {
      await signInWithGooglePopup().then((res) => {
        console.log(res);
        seUserPhoto(res.user.photoURL);
        localStorage.setItem("user", JSON.stringify(res.user));
      });
    }
  };

  return (
    <>
      {login ? (
        <>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={isOpen ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={isOpen ? "true" : undefined}>
            <Avatar sx={{ width: 50, height: 50 }}>
              {userPhoto ? (
                <img src={userPhoto} alt="userImg" height="50px" width="50px" />
              ) : (
                <PersonIcon />
              )}
            </Avatar>
          </IconButton>
          <Menu
            anchorEl={isOpen}
            id="account-menu"
            open={isOpen ? true : false}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
            <MenuItem onClick={handleClose}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => {
                dispatch(toggleCart());
                // handleClose();
              }}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Cart
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleLogout();
                // handleClose();
                setLogin(false);
              }}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Button
          variant="outlined"
          style={{ backgroundColor: "white" }}
          onClick={() => {
            logGoogleUser();
            setLogin(true);
          }}>
          Log In
        </Button>
      )}
    </>
  );
}

export default Auth;
