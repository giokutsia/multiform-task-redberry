import React from 'react';
import {
    useNavigate, useMatch,
   Routes, Route, Link
 } from "react-router-dom"
import FormPage from './pages/forms/formsPage';
import StartingPage from './pages/startingPage';


const App = () => {
    return (
        <div className='main'>
            <Routes>
                <Route path='/' element={<StartingPage />}/>
                <Route path='/forms' element={<FormPage />}/>
            </Routes>

        </div>
       
        
    );
};

export default App;