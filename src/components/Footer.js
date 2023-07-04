import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css"
import { Link } from 'react-router-dom';
//test message
function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
        <Link to="https://instagram.com" target="_blank">
<InstagramIcon /> </Link>
<TwitterIcon />
<FacebookIcon />
<LinkedInIcon />
        </div>
<p>
&copy; 2023 pizzamania.com
</p>
        
    </div>
  );
}

export default Footer