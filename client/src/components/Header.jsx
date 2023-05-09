import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import { NavLink, useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import "./header.css";


const Header = () => {
    

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("usersdatatoken");
        console.log("user logout");
        if(logout){
            navigate("/");
        }
    }

    // const navigate = useNavigate();

    // const logoutuser = async () => {
    //     let token = localStorage.getItem("usersdatatoken");

    //     const res = await fetch("/logout", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": token,
    //             Accept: "application/json"
    //         },
    //         credentials: "include"
    //     });

    //     const data = await res.json();
    //     console.log(data);

    //     if (data.status == 201) {
    //         console.log("use logout");
    //         localStorage.removeItem("usersdatatoken");
    //         navigate("/");
    //     } else {
    //         console.log("error");
    //     }
    // }



    return (
        <>
            <header>
                <nav>
                <h1>Rom Soft</h1>
                    <div className="avtar">
                        <Avatar style={{background: "blue"}} onClick={handleClick} > R </Avatar>
                    </div>
                    
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={ () => { 
                                handleClose()   
                                logout()
                                }}>Logout</MenuItem>
                    </Menu>
                    
                </nav>
                
            </header>
        </>
    );
}

export default Header;
