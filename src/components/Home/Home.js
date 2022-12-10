import React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs'
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='flex select justify-between items-center'>
                <div className='flex gap-3'>
                    <a href="" className='text-black'>All Posts(32)</a>
                    <a href="">Article</a>
                    <a href="">Event</a>
                    <a href="">Education</a>
                    <a href="">Job</a>
                </div>
                <div className='flex items-center'>
                    <div>
                        <select className="select w-full max-w-xs">
                            <option disabled selected>Write a Post</option>
                            <option>Homer</option>
                            <option>Marge</option>
                            <option>Bart</option>
                            <option>Lisa</option>
                            <option>Maggie</option>
                        </select>
                    </div>
                    <div>
                        <button className='button text-white flex justify-center items-center'>
                            <BsFillPeopleFill className='icon'></BsFillPeopleFill>
                            <h1>Join Group</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;