import React, {useState, useEffect} from "react";
import dataServices from "../../../services/axiosDataFetch";
import useForm from "../../../hooks";

const SkillInfo = ({inputValue,handleChange}) => {
    const {error} = useForm()
    const [skillApi, setSkillApi] = useState([])
    console.log('inputValue', inputValue)
    useEffect (() => {
        
        
          dataServices
          .getAll()
          .then(initialSkills => {
            //console.log(initialSkills)
            setSkillApi(initialSkills)
          
          })
        
        
      }, [])
      const [skill, setSkill] = useState([])
      const handleAddSkill = (e) => {
        console.log(e.target.selectedIndex)
        
        setSkill([...skill, e.target.selectedIndex])
      }

    // console.log("skills", skillApi.map(i => i.id))
    
    console.log("skills", skill)
    return ( 
        <div>
            
            <h1>skillinfo</h1>
          <select defaultValue='Skills' onChange={ handleChange }>
            <option id="skills" key={'selected'} disabled hidden defaultValue='Skills' > Skills </option>
          {
           skillApi && skillApi.map(i => 
              <option name="id"  key={i.id} value={i.title}>{i.title}</option>
              
              )
          }
          </select>
          <br />  
          <input name="experience"></input>
          <br />
          <br />  
          <button name="add">add</button>
          <button name="delete">delete</button>
          <br />
          <br />
          <div>
            {inputValue.skills.map(i => 
              <li key={i.id}>{i.id}</li>
              )}
          </div>
        </div>
     );
}
 
export default SkillInfo;