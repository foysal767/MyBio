import React from 'react';
import { Link } from 'react-router-dom';
import imgmobEshop from '../../../assets/projectsImages/mobEshop-img-01.png'
import imgtreavelBee from '../../../assets/projectsImages/travelBee-img-01.png'
import imgmecEdu from '../../../assets/projectsImages/mecEdu-img-01.png'

const Projects = () => {
    return (
        <div className='w-10/12 mx-auto my-16 rounded-xl py-8' style={{ backgroundColor: "#172138" }}>
            <h2 className='text-3xl font-semibold text-teal-400'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto mt-6 my-10'>
                <div className="max-w-xs rounded-md shadow-md mx-auto" style={{ backgroundColor: "#1d2b4a" }}>
                    <img src={imgmobEshop} alt="" className="object-cover object-center w-full rounded-t-md h-72" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold tracking-wide">mobEshop</h2>
                            <p className="">This is an used mobile selling web app. Here, products  are divided three categeries.</p>
                        </div>
                        <Link to=''><button className="flex items-center btn-primary justify-center w-full p-3 font-semibold tracking-wide rounded-md text-white">View Details</button></Link>
                    </div>
                </div>
                <div className="max-w-xs rounded-md shadow-md mx-auto" style={{ backgroundColor: "#1d2b4a" }}>
                    <img src={imgtreavelBee} alt="" className="object-cover object-center w-full rounded-t-md h-72" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold tracking-wide">treavelBee</h2>
                            <p className="">This is an travel tourist guide service related web app.Users can add or delete own feedback.</p>
                        </div>
                        <Link to=''><button className="flex items-center btn-primary justify-center w-full p-3 font-semibold tracking-wide rounded-md text-white">View Details</button></Link>
                    </div>
                </div>
                <div className="max-w-xs rounded-md shadow-md mx-auto" style={{ backgroundColor: "#1d2b4a" }}>
                    <img src={imgmecEdu} alt="" className="object-cover object-center w-full rounded-t-md h-72" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold tracking-wide">mecEdu</h2>
                            <p className="">This is an online course related web app. Logged in users can purchase courses.</p>
                        </div>
                        <Link to=''><button className="flex items-center btn-primary justify-center w-full p-3 font-semibold tracking-wide rounded-md text-white">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;