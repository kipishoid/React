import React from 'react';
import TodoList from '../components/TodoList';
import { Link } from 'react-router-dom';
import { BottomNavigation, Box } from '@mui/material';

function About() {
    return (
        <>
            <Box mt={5}>
                <BottomNavigation>
                    <Link to="/"> Home </Link>
                </BottomNavigation>
                <TodoList />
            </Box>
        </>
    );
}


export default About;