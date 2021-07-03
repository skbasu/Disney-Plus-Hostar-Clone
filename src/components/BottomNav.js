import React, { useState, useEffect } from 'react';
import './BottomNav.css';
import { useHistory } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import TvIcon from '@material-ui/icons/Tv';
import MovieIcon from '@material-ui/icons/Movie';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import WindowSize from '../utils/screenSize';

const Hotstar = () => {

    const [height, width] = WindowSize();
    const [value, setValue] = useState(0);
    const history = useHistory();

    const theme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#fff',
            },
            background: {
                paper: '#0b0f18',
            },
        },
    });

    useEffect(() => {
        if (value === 0) {
            history.push("/")
        } else if (value === 1) {
            history.push("/tv")
        } else if (value === 2) {
            history.push("/movies")
        }
    }, [value, history]);

    return (
        <div className="hotstar">
            {
                width < 800 ? (
                    <ThemeProvider theme={theme}>
                        <BottomNavigation
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            showLabels
                        >
                            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                            <BottomNavigationAction label="TV" icon={<TvIcon />} />
                            <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
                        </BottomNavigation>
                    </ThemeProvider>
                ) : (
                    <div></div>
                )
            }

        </div>
    );
}

export default Hotstar;
