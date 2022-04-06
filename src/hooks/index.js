import  {useState, useEffect}  from "react";
import dataServices from "../services/axiosDataFetch";
import {omit} from "lodash"



const useForm = (collBack) => {
    const [value, setValue] = useState(0)
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
          if (value.length < 5) {
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
    
   
  const increase = (e) => {
    // if(e) e.preventDefault()
    
    setValue(value +1)
    
    
    
    
  }

  const decrease = () => {
  value !== 0 &&
    setValue(value - 1)
  }
  
    return {
      value, 
      inputValue,
      error,
      increase,
      decrease,
      handleChange
      
    }
  }
  export default useForm
 
