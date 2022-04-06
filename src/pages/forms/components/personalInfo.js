import React from 'react';

const PersonalInfo = ({inputValue, handleChange, error}) => {
    // const {handleChange, inputValue, error} = useForm()
    
    // console.log("form inputs", Object.keys(error).length)
    return (
        <div>
            <h1>personal info</h1>
            <form>
                <input type="firstname" name='first_name' value={inputValue.first_name}  placeholder='First Name' onChange={handleChange} />
                {error.first_name ? <p>{error.first_name} </p> : inputValue.first_name==='' ? <p>required</p> : ''}
                {/* {inputValue.first_name==='' ? <p>required</p>} */}
                <input type="lastname" name='last_name' value={inputValue.last_name} placeholder='Last Name' onChange={handleChange} />
                {error.last_name ? <p>{error.last_name}</p> : inputValue.last_name==='' ? <p>required</p> : ''}
                <input type="email" name='email' value={inputValue.email} placeholder='E-MAIL' onChange={handleChange} />
                {error.email ? <p> {error.email} </p> : inputValue.email==='' ? <p>required</p> : ''}
                <input type="mobilenumber" name='phone' value={inputValue.phone} placeholder='+995 5_ _ _ _' onChange={handleChange} />
                {error.phone && <p>{error.phone}</p> }
            </form>
            {inputValue.last_name}
        </div>
    );
};

export default PersonalInfo;