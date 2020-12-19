
import React from 'react'
import './App.css';
import { signInwithGoogle } from './firebase.utils';
class App extends React.Component {

  constructor(){
    super();
     this.state ={
       email:'',
       password:''
     }
  }
  handleChange = (event)=>{
     const {name,value} = event.target
     this.setState({[name]:value})
  }

  handleSubmit = (event)=>{
      event.preventDefault()
      this.setState({email:'',password:''})
  }
  render(){

  return (
    <div className="App">
      <div>
        <form type= 'submit' onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='email'
            label='Email'
            onChange={this.handleChange}
            value={this.state.email}
            
          />
          <input
            type='password'
            name='password'
            label='Password'
            onChange={this.handleChange}
            value={this.state.password}
            
          />
          <button onClick={signInwithGoogle}>SIGN IN WITH GOOGLE</button>
        </form>
      </div>
        
    </div>
  );
}
}

export default App;
