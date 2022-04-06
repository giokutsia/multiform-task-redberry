import React from 'react';
import { Link } from 'react-router-dom';
const StartingPage = () => {
    return (
        <div className='startingDiv'>
            <h1>starting page</h1>
            <Link to='/forms' className='button' >get Started</Link>
        </div>
    );
};

export default StartingPage;