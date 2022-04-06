import React, {useState, useEffect} from "react";
import dataServices from "../../../services/axiosDataFetch";
import useForm from "../../../hooks";

const SkillInfo = ({inputValue,handleChange}) => {
    const {error} = useForm()
    const [skillApi, setSkillApi] = useState([])
    useEffect (() => {
        console.log('effect')
        
          dataServices
          .getAll()
          .then(initialSkills => {
            //console.log(initialSkills)
            setSkillApi(initialSkills)
          
          })
        
        
      }, [])
    console.log("skills", skillApi)
    return ( 
        <div>
            
            <h1>skillinfo</h1>
            <input name="skill" value={inputValue.devtalk_topic} onChange={handleChange}/>
        </div>
     );
}
 
export default SkillInfo;