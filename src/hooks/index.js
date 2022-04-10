import  {useState, useEffect}  from "react";
import dataServices from "../services/axiosDataFetch";
import {omit} from "lodash"



const useForm = () => {
    const [value, setValue] = useState(1)
    const [inputValue, setInputValue] = useState(
      {
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        work_preference: '',
        had_covid: '',
        had_covid_at: '',
        vaccinated: '',
        vaccinated_at: '',
        will_organize_devtalk: '',
        devtalk_topic:'',
        something_special: '',
        skills: []
      }
    
    
    )
    const [error, setError] = useState('')
  
   
    const validationInput = (event, name, value) => {
      switch (name) {
        case 'first_name':
          if (value.length < 5 || value === '') {
            setError({
              ...error,
              first_name:"les then 5 char"
            })
          }else if (!new RegExp(/^[A-Za-z]+$/).test(value)){
            setError({
              ...error,
              first_name:"only letters"
            })
          }else {
              const newObj = omit(error, "first_name")
              setError(newObj)
          }
          break;
        case 'last_name':
          if( value.length < 5 ) {
            setError({
              ...error,
              last_name:"les then 5 char"
            })
          }else if (!new RegExp(/^[A-Za-z]+$/).test(value)) {
            setError({
              ...error,
              last_name: "only letters"
            })
          }
          else{
              const newObj = omit(error, "last_name")
              setError(newObj)
          }
          
          break;
        case 'email':
          if(
             !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
             ) {
               setError ({
                 ...error,
                 email: "enter valid email"
               })
             }else {
               const newObj = omit(error, 'email')
               setError(newObj)
             }
          break;
        case 'phone':
          if(
            !new RegExp(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
            // ^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$
            ).test(value)
            ){
            setError({
              ...error,
              phone:"must be 10 characters"
            })
          }else{
            const newObj = omit(error, 'phone')
            setError(newObj)
          }
          break;
        default:
          break;
      }
  }
  
  
    const handleChange = (e) => {
      
      const name = e.target.name
      const newValue = e.target.value
      validationInput(e, name, newValue)
      setInputValue({
        ...inputValue,
        [name] : newValue
      })
      // console.log("giorgi")
      // setInputValue(inputValue.map)
    }
const validateNavButt = (name) => {
  switch (name) {
    case 'forward':
      if(value === 0 && ( Object.keys(error).length===0 && inputValue.first_name.length !== 0 
      && inputValue.last_name.length !== 0 
      && inputValue.email.length !== 0
      ) ){
        setValue(value+1)
        
      } 
     
      
      console.log("name",Object.keys(error).length)
    case 'back':
      if (value !==0){
        setValue(value-1)
      }
    default:
      break;
  }
}

const handleNavigation = (e) => {
  const name = e.target.name
 
  validateNavButt(name)
    
}

  const decrease = () => {
  value !== 0 &&
    setValue(value - 1)
  }
  

  
    return {
      value, 
      inputValue,
      error,
      handleNavigation,
      decrease,
      handleChange,
      
    }
  }
  export const dataFetch = (url) => {
    
  }
  export default useForm
 
