import React from 'react';
import TodoList from '../components/TodoList';
import { Link as RouterLink } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';

function About() {
    return (
        <>
            <Box mt={5}>
                <BottomNavigation showLabels>
                    <BottomNavigationAction                     
                        label="Home"
                        component={RouterLink}
                        to="/"
                    />
                </BottomNavigation>
                <TodoList />
            </Box>
        </>
    );
}


export default About;