import React from 'react';
import styles from './footer.module.css';
import facebookLogo from '../Images/WW_images/facebook-icon.png'
import instagramLogo from '../Images/WW_images/instagram-icon.png'

const Footer = () => {
  return (
    <React.Fragment>
      <footer className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerText}>
            <p>© 2021 Weidman Woodworks LLC</p>
            <p>Aaron Weidman</p>
            <p>weidmanaaron@gmail.com</p>
            <p>(503) 929 2810</p>
          </div>
          <div className={styles.mediaIconsWrapper}>
            <a href="https://www.facebook.com/Weidman-Woodworks-237355887470641/">
              <img  className={styles.mediaIconsImg} src={facebookLogo} alt="Facebook Link" />
            </a>
            <a href="https://www.instagram.com/weidman_woodworks/?hl=en">
              <img  className={styles.mediaIconsImg} src={instagramLogo} alt="Instagram Link" />
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;