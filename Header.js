import { Avatar } from '@mui/material'
import React from 'react'

export default function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <h1 style={{ fontFamily: 'Norican', fontStyle: 'italic' }}>SongSpot</h1>
        </div>
        <nav className='navigation'>
            <ul>
                <li><h4 style={{ fontFamily: 'Norican', fontStyle: 'italic',color:'white' }}>Songs</h4></li>
                <li><h4 style={{ fontFamily: 'Norican', fontStyle: 'italic',color:'white' }}>Profile</h4></li>
                <li><h4 style={{ fontFamily: 'Norican', fontStyle: 'italic',color:'white' }}>About</h4></li>
                <li><h4 style={{ fontFamily: 'Norican', fontStyle: 'italic',color:'white' }}>Contact</h4></li>
            </ul>
        </nav>
        <div >
        <Avatar alt="Sruti" src="https://images.pexels.com/photos/1001850/pexels-photo-1001850.jpeg?auto=compress&cs=tinysrgb&w=600"  style={{marginRight:'20px'}}/>
        </div>
    </div>

  )
}
