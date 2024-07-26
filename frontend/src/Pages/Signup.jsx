import React from 'react'
import './CSS/Signup.css'
import { useState } from 'react'
import axios from 'axios'


export const Signup = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword]= useState('')


  const signupUser = () =>
  {
    axios.post("http://127.0.0.1:5000/signup", {
      email: email,
      username: username,
      password : password
      })
    .then(function(response){
      console.log(response)
      window.location.href = "/"
    })
    .catch(function(error){
      console.log(error, 'error')
      if(error.response.status === 401)
      {
        alert("Invalid Credentials")
      }
    })
  }


  return (
    <div className='login'>
      <div className="login-box">
    <h2>Signup</h2>
    <div className="textbox">
        <input type="text" placeholder="Email" value={email} name='email'onChange={(e)=>setEmail(e.target.value)} required/>
    </div>
    <div className="textbox">
        <input type="text" placeholder="Username" value={username} name='username'onChange={(e)=>setUsername(e.target.value)} required/>
    </div>
    <div className="textbox">
        <input type="password" placeholder="Password" value={password} name='password'onChange={(e)=>setPassword(e.target.value)} required/>
    </div>
    <div className="remember-me">
        <input type="checkbox" id="remember" name="remember"/>
        <label>Remember Me</label>
    </div>
    <button type="button" className="btn" onClick={() => signupUser()}>Sign Up</button>
        </div>
    </div>
  )
}
export default Signup
