import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const ProjectsPage = () => {
    const project = useLoaderData({});
    if (Loading) {
        <Loading></Loading>
    }
    return (
        <div className='w-10/12 mx-auto my-12'>
            <h2 className='text-3xl my-8 font-semibold'>Projects Name: <span className='text-teal-400'>{project.name}</span> </h2>
            <div className="w-10/12 mx-auto shadow-xl py-8">
                <figure className='w-10/12 mx-auto'>
                    <section className="py-2">
                        <div className="container flex flex-col justify-center  mx-auto">
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                                {
                                    (project.images).map(image => <img className="object-cover w-full  aspect-square" alt='' src={image.img} />)
                                }
                            </div>
                        </div>
                        <div className='text-left text-xl font-medium w-10/12 mx-auto mt-8'>
                            <h1 className='text-2xl font-semibold'>The Main Features are:</h1>
                                {
                                    (project.features).map(feature => <li>{feature.point}</li>)
                                }

                        </div>
                    </section>
                </figure>
                <div className="flex justify-start text-left w-10/12 mx-auto my-8">
                    <div className="card-actions">
                        <button className='btn text-black' style={{ backgroundColor: "#2DD4BF" }}><a target='_blank' href={project.liveLink}>View Live</a></button>
                    </div>
                    <div className="card-actions mx-8">
                        <button className='btn text-black' style={{ backgroundColor: "#2DD4BF" }}><a target='_blank' href={project.clientSideCode}>Client Side Code</a></button>
                    </div>
                    <div className="card-actions">
                        <button className='btn text-black' style={{ backgroundColor: "#2DD4BF" }}><a target='_blank' href={project.serverSideCode}>Server Side Code</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;