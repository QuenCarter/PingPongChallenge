import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Header.css';

const Header = () => {
    return (
        <div className="header-root">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className="header-title">
                    Ping Pong Challenge
                    </Typography>
                    <a>
                        Leaderboard
                    </a>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header;