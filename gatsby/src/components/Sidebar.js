import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';
import icon from "../assets/images/website-icon.svg"

export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false)
  const handleMenuToggle = () => {
    console.log(headerOpen)
    toggleHeader(!headerOpen)
  }
  return (
    <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
        <div style={{display: 'flex', alignItems: 'center', gap: '5px', marginLeft: '5px'}}>
            <img src={icon} alt="website-icon" height={45}/>
            <Link style={{
                  font: 'inherit',
                  color: 'white',
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '0.225em',
                  border: 'none'
                  }} to="/">
              LB FELINE RESCUE
            </Link>
        </div>
      <div className={headerOpen ? 'is-menu-visible' : ' '}>
        <Nav onMenuToggle={handleMenuToggle} />
      </div>
    </header>
  );
}
