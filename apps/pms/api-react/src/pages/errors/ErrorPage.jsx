/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import errorpng from '../../assets/404.png'
import home404 from '../../assets/HomeButton404.png'

const ErrorPages = () => {
  return (
    <>
        <div className='py-10 px-16 h-48'>
            <Link to="/">
                <button className='font-bold'>
                    <img className='h-36' src={home404} alt="Home Button" />
                    <p>Come to the dark side</p>
                    <p>We have cookies</p>
                </button>
            </Link>
        </div>
        <div className="flex flex-col justify-center items-center bg-transparent">
            <img src={errorpng} alt="404 Image" />
        </div>
    </>
  );
};

export default ErrorPages