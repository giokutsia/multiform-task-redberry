import React, {useState, useEffect} from "react";
import dataServices from "../../../services/axiosDataFetch";
import useForm from "../../../hooks";

const SkillInfo = ({inputValue,handleChange}) => {
    const {error} = useForm()
    const [skillApi, setSkillApi] = useState([])
    useEffect (() => {
        
        
          dataServices
          .getAll()
          .then(initialSkills => {
            //console.log(initialSkills)
            setSkillApi(initialSkills)
          
          })
        
        
      }, [])
    console.log("skills", skillApi.map(i => i.title))
    return ( 
        <div>
            
            <h1>skillinfo</h1>
          <select defaultValue='Skills'>
            <option key={'selected'} disabled hidden defaultValue='Skills' > Skills </option>
          {
            skillApi.map(i => 
              <option key={i.id} value={i.title}>{i.title}</option>
              )
          }
          </select>
          
        </div>
     );
}
 
export default SkillInfo;