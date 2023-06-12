import React from 'react';
import { Link } from 'react-router-dom';

const ExtraSectionCard = () => {
    return (
        <div>
            <div className="hero min-h-screen my-10">
                <img className='w-full h-full' src="https://i.pinimg.com/originals/c4/50/f7/c450f7df8a8a5a1b7fe3b2c25b3b130f.jpg" alt="" />
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">EASY WAYS TO TURN YOUR DREAMS INTO REALITY</h1>
                        <p className="mb-5">Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals.</p>
                        <Link to='/allclass' className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>        </div>
    );
};

export default ExtraSectionCard;