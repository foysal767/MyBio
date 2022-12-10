import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../Pages/Home/Home/Home';
import Mailer from '../../Pages/Mailer/Mailer';
import Resume from '../../Pages/Resume/Resume';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Mailer></Mailer>
            }
        ]
    }
])

export default router;