import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./header.css";


const Header = () => {
    const [showContent, setShowContent] = useState(false);

    const handleMouseEnter = () => {
        setShowContent(true);
    };

    const handleMouseLeave = () => {
        setShowContent(false);
    };


    return (
        <>
            <header>
                <nav>
                <h1>Rom Soft</h1>
                    <div className="avtar">
                        <Avatar style={{background: "blue"}} >H  </Avatar>
                    </div>
                    <Menu title='User Name' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                        <MenuItem>
                        {showContent && <MenuItem >Logout</MenuItem> }
                        </MenuItem>
                    </Menu>
                    
                </nav>
                
            </header>
        </>
    );
}

export default Header;
