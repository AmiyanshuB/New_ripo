
import React from 'react'
import './App.css'



const api=(data)=>{
    return fetch(`http://localhost:6000//userdashboard`,{
        method:"POST",
        body:data
    }).then(response=>response.json()).catch(err=>console.log(err))
}


const App=()=>{
    

    return (
        <div className="main">
        <h2>USER DASHBOARD</h2>
<div className="container" id="container">
  <div className="form-container personal-in-container">
    <form>
      <h1>Student information</h1>
      
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="file" placeholder="Choose profile pic" />
      <input type="number" placeholder="Phone No." />
      
      <button>Submit</button>
    </form>
  </div>
  <div className="overlay-container">
    <div className="overlay">
      
      <div className="overlay-panel overlay-right">
        <h1>Hey, Geek!</h1>
        <p>Enter your personal details for our college...</p>
        
      </div>
    </div>
  </div>
</div>


        </div>
    )
}
export default App