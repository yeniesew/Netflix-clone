import React from 'react'
import "./header.css"
import netflixlogo from '../../assets/images/netflixlogo.jpg'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Header() {
  return (
    <div className='header_outer_container'>
      <div className='header_container'>
        <div className='header_left'>
          <ul>
            <li><img src={netflixlogo} alt="netflixlogo" width="100" /></li>
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latset</li>
            <li>MyLists</li>
            <li>Browse by language</li>
          </ul>
        </div>
        <div className='header_right'>
          <ul>
            <li><SearchIcon/></li>
            <li><NotificationsNoneIcon/></li>
            <li><AccountBoxIcon/></li>
            <li><ArrowDropDownIcon/></li>
          </ul>
        </div>
        

      </div>

    </div>
  )
}

export default Header