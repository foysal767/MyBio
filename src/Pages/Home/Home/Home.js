import React, { useEffect } from 'react';
import portfolioImg from '../../../assets/images/portfolioImg.png';
import Typewriter from 'typewriter-effect';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
    
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={portfolioImg}
                        className="max-w-sm rounded-lg shadow-2xl my-4"
                        alt=''
                    />
                    <div className='text-left text-gray-400 my-4'>
                        <h1 className='text-4xl font-semibold my-2'>Hi! I'm
                            <br />
                            <span className='text-pink-600 font-bold'>Mohammad Foysal Uddin</span>
                        </h1>
                        <h1 className='text-4xl font-semibold flex mb-4'>a
                            <span className='ml-2'>
                                {
                                    <Typewriter
                                        options={{
                                            strings:
                                                [
                                                    'Professional Coder.',
                                                    'MERN Stack Developer.',
                                                    'Shopify Expert.',
                                                    'Wordpress Expert.',
                                                    'Graphic Designer.'
                                                ],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                }
                            </span>
                        </h1>
                        <button className="btn btn-success text-white">
                            <a href="https://drive.google.com/file/d/1sZnr1HbqgzLi482xtCGwyCz4b1sQ6yKA/view?usp=sharing" target="_blank" >My Resume</a>
                        </button>
                    </div>
                </div>
            </div>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;