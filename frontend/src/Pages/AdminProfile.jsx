import React from 'react'
import './CSS/AdminProfile.css'
import {useUser} from '../Context/UserContext'


export const AdminProfile = () => {

    const {user} = useUser()

  return (
    <div className='profile'>
      <h1>Admin </h1>
    <p> Name: {user.profile.name}</p>
    <p>Email: {user.profile.email}</p>
    </div>
  )
}

export default AdminProfile
