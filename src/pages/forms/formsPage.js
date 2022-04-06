// import React, {useState} from 'react';

import useForm from '../../hooks';
import NavButton from './components/navButtons';
import PersonalInfo from './components/personalInfo';
import SkillInfo from './components/skillInfo';


const FormPage = () => {
    
    const formNext = () => {
        console.log("next")
        console.log("inputvalue",inputValue)
    }
    const counter = useForm()
    const {handleChange, inputValue, error, increase} = useForm(formNext)
    // console.log("obj", inputValue.map(i => i.firstname))
    const showFormsByPages = () => {
        switch(counter.value){
            case 0:
                return <PersonalInfo inputValue={inputValue} handleChange={handleChange} error={error} />
            case 1:
                return <SkillInfo inputValue={inputValue} handleChange={handleChange}/>
            default:
                return <PersonalInfo />
        }
    }
    return (
        <div>
            
            
            {/* {counter.value === 0 && <PersonalInfo />}
            {counter.value === 1 && <SkillInfo />}
            <NavButton counter = {counter} /> */}
            {showFormsByPages()}
            <NavButton counter={increase} error={error}  inputValue={inputValue}/>
            
           
        </div>
    );
};

export default FormPage;