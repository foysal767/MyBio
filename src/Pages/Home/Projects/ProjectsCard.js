import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsCard = ({project}) => {
    const {name, coverImg, description, _id} = project
    return (
        <div className="max-w-xs rounded-md shadow-md mx-auto" style={{ backgroundColor: "#1d2b4a" }}>
            <img src={coverImg} alt="" className="object-cover object-center w-full rounded-t-md h-72" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
                    <p className="">{description}</p>
                </div>
                <Link to={`/projects/${_id}`}><button className="flex items-center btn-primary justify-center w-full p-3 font-semibold tracking-wide rounded-md text-white">View Details</button></Link>
            </div>
        </div>
    );
};

export default ProjectsCard;