import React from 'react';

const Skills = () => {
    return (
        <div className='w-10/12 mx-auto rounded-xl py-8' style={{ backgroundColor: "#172138" }}>
            <h1 className='text-3xl font-semibold mb-3 text-teal-500'>My Skills</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-6'>
                <div className='border-2 border-pink-400 p-4 rounded-xl'>
                    <h2 className='text-pink-500 mb-2 font-medium'>HTML</h2>
                    <div className="radial-progress text-teal-400"
                        style={{ "--value": 95 }}>95%
                    </div>
                </div>
                <div className='border-2 border-pink-400 p-4 rounded-xl'>
                    <h2 className='text-pink-500 mb-2 font-medium'>CSS</h2>
                    <div className="radial-progress text-teal-400"
                        style={{ "--value": 95 }}>95%
                    </div>
                </div>
                <div className='border-2 border-pink-400 p-4 rounded-xl'>
                    <h2 className='text-pink-500 mb-2 font-medium'>Tailwind CSS</h2>
                    <div className="radial-progress text-teal-400"
                        style={{ "--value": 90 }}>90%
                    </div>
                </div>
                <div className='border-2 border-pink-400 p-4 rounded-xl'>
                    <h2 className='text-pink-500 mb-2 font-medium'>Bootstrap</h2>
                    <div className="radial-progress text-teal-400"
                        style={{ "--value": 90 }}>90%
                    </div>
                </div>
                <div className='border-2 border-pink-400 p-4 rounded-xl'>
                    <h2 className='text-pink-500 mb-2 font-medium'>Javascript</h2>
                    <div className="radial-progress text-teal-400"
                        style={{ "--value": 85 }}>85%
                    </div>
                </div>
                <div className='border-2 border-pink-400 p-4 rounded-xl'>
                    <h2 className='text-pink-500 mb-2 font-medium'>ReactJs</h2>
                    <div className="radial-progress text-teal-400"
                        style={{ "--value": 80 }}>80%
                    </div>
                </div>
                <div className='border-2 border-pink-400 p-4 rounded-xl'>
                    <h2 className='text-pink-500 mb-2 font-medium'>NodeJs</h2>
                    <div className="radial-progress text-teal-400"
                        style={{ "--value": 60 }}>60%
                    </div>
                </div>
                <div className='border-2 border-pink-400 p-4 rounded-xl'>
                    <h2 className='text-pink-500 mb-2 font-medium'>ExpressJs</h2>
                    <div className="radial-progress text-teal-400"
                        style={{ "--value": 60 }}>60%
                    </div>
                </div>
                <div className='border-2 border-pink-400 p-4 rounded-xl'>
                    <h2 className='text-pink-500 mb-2 font-medium'>MongoDB</h2>
                    <div className="radial-progress text-teal-400"
                        style={{ "--value": 70 }}>70%
                    </div>
                </div>
                <div className='border-2 border-pink-400 p-4 rounded-xl'>
                    <h2 className='text-pink-500 mb-2 font-medium'>FireBase</h2>
                    <div className="radial-progress text-teal-400"
                        style={{ "--value": 70 }}>70%
                    </div>
                </div>
                <div className='border-2 border-pink-400 p-4 rounded-xl'>
                    <h2 className='text-pink-500 mb-2 font-medium'>JWT</h2>
                    <div className="radial-progress text-teal-400"
                        style={{ "--value": 55 }}>55%
                    </div>
                </div>
                <div className='border-2 border-pink-400 p-4 rounded-xl'>
                    <h2 className='text-pink-500 mb-2 font-medium'>Stripe</h2>
                    <div className="radial-progress text-teal-400"
                        style={{ "--value": 35 }}>35%
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;