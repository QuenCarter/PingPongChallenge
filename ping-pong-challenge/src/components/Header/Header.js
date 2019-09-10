import React from "react";
import {Link} from "react-router-dom";
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
                        <Link to="/" className="nav-link">Ping Pong Challenge</Link>
                    </Typography>
                    <Link to="/leaderboard" className="nav-link">
                        Leaderboard
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header;