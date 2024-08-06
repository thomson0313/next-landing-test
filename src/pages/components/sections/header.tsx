import styles from '../../../styles/sections/header.module.css';
import React, { useState } from 'react';

export default function Header() {

    const [isToggled, setIsToggled] = useState(false);

    const toggleBar = () => {
         setIsToggled(!isToggled);
    }
    return (
        <div className={`${styles.header}`}>
            <div className={`${styles.headerBar}`}>
                <div className={`${styles.logo}`}>
                    <img src="images/logo.png" alt="logo" />
                </div>
                <div className={`${styles.navBar}`}>
                    <a href="#" className={`${styles.navBarFont}`}>Home</a>
                    <a href="#" className={`${styles.navBarFont} ${styles.about}`}>About</a>
                    <a href="#" className={`${styles.navBarFont} ${styles.contactUs}`}>ContactUs</a>
                </div>
                <div className={`${styles.authSection}`}>
                    <button className={`${styles.auth} ${styles.signUp}`}>Sign up</button>
                    <button className={`${styles.auth} ${styles.login}`}>Login</button>
                </div>
                <div className={`${styles.responsiveHeader} ${isToggled ? styles.toggled : ''}`}>
                    <div className={`${styles.responsiveBtn}`} onClick={toggleBar}>
                        <img src="images/icons/swap-icon.png" alt="" />
                    </div>
                    <div className={`${styles.responsiveNavBar}`}>
                        <a href="#" className={`${styles.resonsiveNavBarFont}`}>Home</a>
                        <a href="#" className={`${styles.resonsiveNavBarFont}`} >About</a>
                        <a href="#" className={`${styles.resonsiveNavBarFont}`}>ContactUs</a>
                    </div>
                </div>
            </div>
        </div>
    )
}