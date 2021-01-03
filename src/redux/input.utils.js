
export const addUserInput=(userInput, inputToAdd)=>{
        console.log(inputToAdd)
        const userInpuState = [...userInput, inputToAdd]
        if(userInpuState[userInpuState.length-1]===inputToAdd){
                const {firstName,lastName,phoneNumber} = inputToAdd
                
                alert('added successFully: '+firstName+' '+lastName+' '+phoneNumber)
        }
        
        return userInpuState;
}

