import React from 'react'
import './CSS/Loginsignup.css'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useUser} from '../Context/UserContext'

export const Loginsignup = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login} = useUser()
  const navigate = useNavigate()
  
  const logInUser = () =>{
    const adminCredentials = {
      email: "admin@admin.com",
      password: "admin",
      profile:{name: "Admin", email: "admin@admin.com"},
    }
    const guestCredentials = {
      email: "guest@gmail.com",
      password: "123456",
      profile:{name: "Guest User", email: "guest@gmail.com"},
    }
    if (email === adminCredentials.email && password === adminCredentials.password) {
      login('admin', adminCredentials.profile);
      navigate('/admin');
    } else if (email === guestCredentials.email && password === guestCredentials.password) {
      login('guest', guestCredentials.profile);
      navigate('/guest');
    } else {
      alert('Login failed: Incorrect email or password');
    }
  }

 
  return (
    <div className='login'>
      <div className="login-box">
    <h2>Login</h2>
    <div className="textbox">
        <input type="text" placeholder='Email'value={email} name='email' onChange={(e) =>setEmail(e.target.value)}/>
    </div>
    <div className="textbox">
        <input type="password" placeholder='Password' value={password} name='password' onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <div className="remember-me">
        <input type="checkbox" id="remember" name="remember"/>
        <label>Remember Me</label>
    </div>
    <button type="button" className="btn" onClick={logInUser}>Login</button>
        </div>
      <div className="signuplink">
            <Link to='/signup'>New Customer?</Link>
        </div>

    </div>
  )
}
export default Loginsignup
