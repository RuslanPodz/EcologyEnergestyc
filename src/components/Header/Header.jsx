import { signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { auth } from '../../firebase';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isAboutPage = location.pathname === '/aboutUs';
  const isSettingPage = location.pathname === '/setting';

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/'); 
      })
      .catch((error) => {
        console.error("Logout Error:", error);
      });
  };

  return (
    <div className={styles.navbar} data-testid="header">
      <div className={styles.navbarLogo} data-testid="logo">EcologyEnergestyc</div>
      <div className={styles.menuIconContainer} onClick={toggleMenu} data-testid="menu-icon">
        <div className={`${styles.burgerIcon} ${isOpen ? styles.open : ''}`} data-testid="burger-icon"></div>
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`} data-testid="menu">
        <Link to={isAboutPage ? '/home' : '/aboutUs'} className={styles.link} data-testid="about-link">
          {isAboutPage ? 'Home' : 'About us'}
        </Link>
        <a href="#social-media" className={styles.link} data-testid="social-media-link">Social Media</a>
        <a href="#support" className={styles.link} data-testid="support-link">Support</a>
        <Link to={isSettingPage ? '/home' : '/setting'} className={styles.link} data-testid="settings-link">
          {isSettingPage ? 'Home' : 'Setting'}
        </Link>
        <button onClick={handleLogout} className={styles.logOut} data-testid="logout-button">
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Header;
