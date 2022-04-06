import React from 'react';
import useForm from '../../../hooks';



const NavButton = ({counter, inputValue, error}) => {
    const isError = Object.keys(error).length !== 0
    // console.log("without map",inputValue.email.length === 0)
   console.log(Object.keys( inputValue).map((i,j) => 
        inputValue[i]
   ))
   console.log(counter.increase)
    // console.log(Object.fromEntries(inputValue).map(i => i))
    return (
        <div>
           
            <button  onClick={ counter}>&#10094;</button>
             
            {/* <button onClick={counter.increase}>&#10095;</button> */}
            
            
            
        </div>
    );
};

export default NavButton;