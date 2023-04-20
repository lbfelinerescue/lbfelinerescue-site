import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';

export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false)
  const handleMenuToggle = () => {
    console.log(headerOpen)
    toggleHeader(!headerOpen)
  }
  return (
    <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
      <h1>
        <Link to="/">LB FELINES</Link>
      </h1>
      <div className={headerOpen ? 'is-menu-visible' : ' '}>
        <Nav onMenuToggle={handleMenuToggle} />
      </div>
    </header>
  );
}