import React from 'react';
import { Link } from 'react-router-dom';
import imgmobEshop from '../../../assets/projectsImages/mobEshop-img-01.png'
import imgtreavelBee from '../../../assets/projectsImages/travelBee-img-01.png'
import imgmecEdu from '../../../assets/projectsImages/mecEdu-img-01.png'
import { useQuery } from '@tanstack/react-query';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    const {data: projects = [] } = useQuery({
        queryKey: ['projects'],
        queryFn: async() =>{
            const res = await fetch('https://my-portfolio-server-ten.vercel.app/')
            const data = await res.json()
            return data;
        }
    })
    return (
        <div className='w-10/12 mx-auto my-16 rounded-xl py-8' style={{ backgroundColor: "#172138" }}>
            <h2 className='text-3xl font-semibold text-teal-400'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto mt-6 my-10'>
                {
                    projects.map(project => <ProjectsCard
                        key={project._id}
                        project={project}
                    ></ProjectsCard>)
                }
            </div>
        </div>
    );
};

export default Projects;