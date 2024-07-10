import React from 'react';
import TemperatureConverter from '../components/TemperatureConverter';
import { Link } from 'react-router-dom';
import { Box, BottomNavigation } from '@mui/material';
function Home() {
    return (
        <>
            <Box mt={5}>
                <BottomNavigation>
                    <Link to="/about"> About </Link>
                </BottomNavigation>
                <TemperatureConverter />
            </Box>
        </>
    );
}


export default Home;