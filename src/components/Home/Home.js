import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div>
                <a href="">All Posts(32)</a>
                <a href="">Article</a>
                <a href="">Event</a>
                <a href="">Education</a>
                <a href="">Job</a>
            </div>
            <div>
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
                    <button>
                        Join Group
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;