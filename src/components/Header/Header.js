import React from 'react';
import './Header.css';
import image from '../../assets/Rectangle 2.png';

const Header = () => {
    return (
        <div>
            <div className='img-div'>
                <img className='Header-img opacity-70' src={image} alt="" />
            </div>
            <div className='Header-text'>
                <h1>Computer Engineering</h1>
                <h2>142,765 Computer Engineers follow this</h2>
            </div>
        </div>
    );
};

export default Header;