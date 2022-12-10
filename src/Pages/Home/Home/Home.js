import React from 'react';
import portfolioImg from '../../../assets/images/portfolioImg.png';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={portfolioImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                        alt=''
                    />
                    <div className='text-left '>
                        <h1 className="text-2xl font-bold">Welcome to My World!</h1>
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
                        <button src='' className="btn btn-primary">
                            <a href="https://drive.google.com/file/d/1sZnr1HbqgzLi482xtCGwyCz4b1sQ6yKA/view?usp=sharing"> My Resume</a>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;