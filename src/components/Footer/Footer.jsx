import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div data-testid="footer" className={styles.footer}>
      <div className={styles.content}>
        <div data-testid="social-media" className={styles.logoSection}>
          <span data-testid="logo" className={styles.logo}>EcologyEnergestyc</span>
        </div>
        <div className={styles.links}>
          <div className={styles.socialMidea}>
            <h3>Social Media</h3>
            <p> Instagram</p>
            <p> Facebook</p>
            <p> YouTube</p>
          </div>
          <div id="support">
            <h3>Help</h3>
            <a className={styles.supportlLink} href="mailto:ecology.energestyc@gmail.com">Support</a>
          </div>
          <div>
            <h3>Contact Us</h3>
            <a className={styles.numberLink} href="tel:+380999521470">+380(99) 952 147 0</a><br />
            <a className={styles.emailLink} href="mailto:ecology.energestyc@gmail.com">ecology.energestyc@gmail.com</a>
          </div>
        </div>
        <div className={styles.copyright}>
  <p>Copyright © 2024 All rights Reserved . Null</p>
</div>
      </div>
    </div>
  );
};

export default Footer;
