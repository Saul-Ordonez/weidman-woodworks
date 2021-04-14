import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
  return (
    <React.Fragment>
      <footer className={styles.container}>
        <div className={styles.footerText}>
          <p>© 2021 Weidman Woodworks LLC</p>
          <p>Aaron Weidman</p>
          <p>weidmanaaron@gmail.com</p>
          <p>503 929 2810</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;