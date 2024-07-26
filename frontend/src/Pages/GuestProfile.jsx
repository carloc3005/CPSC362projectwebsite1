import React from 'react'
import './CSS/GuestProfile.css'
import {useUser} from '../Context/UserContext'

export const GuestProfile = () => {
  const {user} = useUser()
  return (
    <div className='profile'>
        <h1>Guest Profle</h1>
    <p> Name: {user.profile.name}</p>
    <p>Email: {user.profile.email}</p>
    </div>
  )
}
export default GuestProfile
