
import InputForm from "../../components/InputForm.component";
import './input-page.style.css'
import React, { useReducer,useState } from 'react';
import CustomButton from "../../components/custom-button.component";
import OutputPage from "../../output-page.component";
const InputPage =()=>{

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        }
      );
      const handleChange = evt => {
        const {name,value} = evt.target
        setUserInput({[name]:value})
      }

      const handleSubmit =evt=>{
          alert("Clicked")
      }

      const {firstName,lastName,phoneNumber} = userInput

      return (
        <div>
         <br/>
         <label>First Name: </label>
         {userInput.firstName}
         <br/>
         <InputForm type="text" name="firstName" value={firstName} onChange={handleChange}/>
         
         <br/>
         <label>Last Name: </label>
         {userInput.lastName}
         <br/>
         <InputForm type="text" name="lastName" value={lastName} onChange={handleChange}/>
         
         <br/>
         <label>Phone Number: </label>
         {userInput.phoneNumber}
         <br/>
         <InputForm type="text" name="phoneNumber" value={phoneNumber} onChange={handleChange}/>
         <CustomButton type='submit'
            onClick={handleSubmit} 
         />
        </div>
        
      )
}

export default InputPage