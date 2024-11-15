import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css"
function Footer() {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
          
          <FacebookIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>

        </div>
        <div className='footer_data'>
          <ul>
              <li>Audio Discription</li>
              <li>Investor Relation</li>
              <li>Legal Notice</li>
            </ul>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>cookie preferencese</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className='Service_Code'>
          <p>
            Service Code
          </p>
            
          </div>
          <div className='Copy write'>
            &copy; 1997-2024 Netflix,Inc.

          </div>
      </div>
    </div>
  )
}

export default Footer