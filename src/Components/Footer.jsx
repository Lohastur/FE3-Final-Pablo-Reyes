import React from 'react'
import { useContextGlobal } from './utils/global.context'

const Footer = () => {
  const {theme} = useContextGlobal();
  return (
    <footer className='footer' id={theme.theme}>
      <div>
        <p>Powered by</p>
        {theme.theme === "light" ? <img src="./images/DH.png" alt='DH-logo'/> : <img src="./images/DH2.png" invert='1' alt='DH2-logo'/>}
      </div>  
      <div>
        <i className="fa-brands fa-facebook face"></i>
        <i className="fa-brands fa-instagram insta"></i>
        <i className="fa-brands fa-tiktok tiktok"></i>
        <i className="fa-brands fa-whatsapp wha"></i>
      </div>
    </footer>
  )
}

export default Footer
