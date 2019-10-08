import React from 'react';
import logo from '../assets/images/logo.png';

const Splash = () => {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <img src={logo} alt="Logo" className="w-32 my-3 animated fadeIn"/>
            <div className="spinner"></div>
        </div>
    );
}

export default Splash;