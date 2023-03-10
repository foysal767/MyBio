import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import About from '../../Pages/About/About';
import Blogs from '../../Pages/Blogs/Blogs';
import Home from '../../Pages/Home/Home/Home';
import Mailer from '../../Pages/Mailer/Mailer';
import ProjectsPage from '../../Pages/ProjectsPage/ProjectsPage';
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
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/projects/:id',
                element: <ProjectsPage></ProjectsPage>,
                loader: ({params}) => fetch(`https://my-portfolio-server-ten.vercel.app/projects/${params.id}`)
            }
        ]
    }
])

export default router;