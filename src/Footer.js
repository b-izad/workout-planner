import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer className="footer">{`Copyright © Bahareh Izadpanah ${year}`}</footer>;
  };
  
  export default Footer;