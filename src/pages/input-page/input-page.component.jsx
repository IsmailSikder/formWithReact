
import InputForm from "../../components/InputForm.component";
import './input-page.style.css'
import React, { useReducer } from 'react';
import CustomButton from "../../components/custom-button.component";

import {connect} from 'react-redux'
import { addUserInput } from "../../redux/input.action";
const InputPage =({userInput})=>{

    const [userInputValue, setUserInput] = useReducer(
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
      const {firstName,lastName,phoneNumber} = userInputValue
      const userInputObject = {firstName,lastName,phoneNumber}
      const handleSubmit =evt=>{
        evt.preventDefault()
        userInput(userInputObject)
      }

    
      return (
        <div>
          <h2>Type Your Info</h2>
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
const mapDispatchToProps =(dispatch)=>(
  {
    userInput : input=>dispatch(addUserInput(input))
  }
)

export default connect(null, mapDispatchToProps)(InputPage)