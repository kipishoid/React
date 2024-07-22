import React from 'react';
import TemperatureConverter from '../components/TemperatureConverter';
import {  Link as RouterLink } from 'react-router-dom';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
function Home() {
    return (
        <>
            <Box mt={5}>
                <BottomNavigation showLabels>
                    <BottomNavigationAction                     
                        label="About"
                        component={RouterLink}
                        to="/about"
                    />
                </BottomNavigation>
                <TemperatureConverter />
            </Box>
        </>
    );
}


export default Home;