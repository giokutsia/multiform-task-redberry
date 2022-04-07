import React from 'react';
import useForm from '../../../hooks';



const NavButton = ({handleNavigation, inputValue, error}) => {
//     const isError = Object.keys(error).length !== 0
//     // console.log("without map",inputValue.email.length === 0)
//    console.log(Object.keys( inputValue).map((i,j) => 
//         inputValue[i]
//    ))
//    console.log(handleNavigation)
    //  console.log(Object.fromEntries(inputValue).map(i => i))
    // const formNext = (e) => {
    //     // console.log("next")
    //     // console.log("inputvalue",inputValue)
    //     console.log(e.target.name === 'back')
        
    // }
    return (
        <div>
           
            <button name='back'  onClick={ handleNavigation}>&#10094;</button>
             
            <button name='forward' onClick={handleNavigation}>&#10095;</button>
            
            
            
        </div>
    );
};

export default NavButton;