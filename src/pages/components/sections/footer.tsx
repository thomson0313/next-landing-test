import styles from '../../../styles/sections/footer.module.css'
import FooterIcon from '../atoms/footerIcon';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import '@/styles/fonts/fontAwesome';

const Footer: React.FC = () => {

    const FontAwesomeIcon = dynamic(
        () => import('@fortawesome/react-fontawesome').then((mod) => mod.FontAwesomeIcon),
        { ssr: false }
    );

    const [showCompanyLinks, setShowCompanyLinks] = useState<boolean>(false);

    const [showContactLinks, setShowContactLinks] = useState(false);
    const [showMoreLinks, setShowMoreLinks] = useState(false);

    const toggleCompanyLinks = () => {
        setShowCompanyLinks(!showCompanyLinks);
    };

    const toggleContactLinks = () => {
        setShowContactLinks(!showContactLinks);
    };

    const toggleMoreLinks = () => {
        setShowMoreLinks(!showMoreLinks);
    }

    const options = [
        { backColor: 'rgba(255, 255, 255, 1);', iconUrl: "images/icons/Facebook Icon.png" },
        { backColor: 'conic-gradient(from 180deg at 50% 50%, #B8D2F1 0deg, #F289AA 60deg, #C68BF0 106.09deg, #D164DA 153.75deg, #C963E8 221.25deg, #BFC2E8 258.75deg, #FFC999 288.75deg, #D0D8C9 315deg, #BAD0F1 334.13deg, #CED8CB 358.97deg, rgba(255, 255, 255, 0) 360deg);', iconUrl: "images/icons/camdot.png" },
        { backColor: 'rgba(255, 255, 255, 1);', iconUrl: "images/icons/twitter.png" }
    ]
    return (
        <div>
            <div className={`${styles.body} ${styles.nonRes}`}>
                <div className={`${styles.mainBack}`}>
                    <div className={`${styles.firstPart}`}>
                        <div className={`${styles.logoDiv}`}>
                            <img src="images/footerLogo.png" alt="" />
                        </div>
                        <p>
                            Making the world a smaller place.
                            One move at a time.
                        </p>
                    </div>
                    <div className={`${styles.secPart}`}>
                        <div className={`${styles.company} ${styles.guideLinks}`}>
                            <p>Company</p>
                            <div className={`${styles.companyLinks} ${styles.links}`}>
                                <a href="#">About</a>
                                <a href="#">Careers</a>
                                <a href="#">Mobile</a>
                            </div>
                        </div>
                        <div className={`${styles.contact} ${styles.guideLinks}`}>
                            <p>contact</p>
                            <div className={`${styles.contactLinks} ${styles.links}`}>
                                <a href="#">Help/FAQ</a>
                                <a href="#">Press</a>
                                <a href="#">Affilates</a>
                            </div>
                        </div>
                        <div className={`${styles.more} ${styles.guideLinks}`}>
                            <p>more</p>
                            <div className={`${styles.moreLinks} ${styles.links}`}>
                                <a href="#">Terms</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Refund Policy</a>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.thirdPart}`}>
                        <div className={`${styles.iconDiv}`}>
                            {
                                options.map((option, index) => (
                                    <FooterIcon
                                        key={index}
                                        backColor={option.backColor}
                                        iconUrl={option.iconUrl}
                                    />
                                ))
                            }
                        </div>
                        <p>Download our app</p>
                        <div className={`${styles.storeDiv}`}>
                            <img src="images/Google Play.png" alt="Goolge Play" />
                            <img src="images/Play store.png" alt="Play store" />
                        </div>
                    </div>
                </div>
                <p className={`${styles.footerLetter}`}>All rights reserved, Movemint App Inc</p>
            </div>
            <div className={`${styles.body} ${styles.resBody}`}>
                <div className={`${styles.mainBack} ${styles.resMainBack}`}>
                    <div className={`${styles.secPart} ${styles.resSecPart}`}>
                        <div className={`${styles.company} ${styles.guideLinks}`}>
                            <div onClick={toggleCompanyLinks} className={`${styles.fontDiv}`}>
                                <p>Company</p>
                                {
                                    !showCompanyLinks ? <FontAwesomeIcon icon={['fas', 'arrow-down']} style={{ color: "#ffffff" }} />
                                        :
                                        <FontAwesomeIcon icon={['fas', 'arrow-up']} style={{ color: "#ffffff" }} />
                                }
                            </div>
                            <div className={`${styles.companyLinks} ${styles.links} ${showCompanyLinks ? styles.show : ''}`}>
                                <a href="#">About</a>
                                <a href="#">Careers</a>
                                <a href="#">Mobile</a>

                            </div>
                        </div>
                        <div className={`${styles.contact} ${styles.guideLinks} `}>
                            <div onClick={toggleContactLinks} className={`${styles.fontDiv}`}>
                                <p>contact</p>                        {
                                    !showContactLinks ? <FontAwesomeIcon icon={['fas', 'arrow-down']} style={{ color: "#ffffff" }} />
                                        :
                                        <FontAwesomeIcon icon={['fas', 'arrow-up']} style={{ color: "#ffffff" }} />
                                }
                            </div>
                            <div className={`${styles.contactLinks} ${styles.links} ${showContactLinks ? styles.show : ''}`}>
                                <a href="#">Help/FAQ</a>
                                <a href="#">Press</a>
                                <a href="#">Affilates</a>
                            </div>
                        </div>
                        <div className={`${styles.more} ${styles.guideLinks} `}>
                            <div onClick={toggleMoreLinks} className={`${styles.fontDiv}`}>
                                <p>more</p>
                                {
                                    !showMoreLinks ? <FontAwesomeIcon icon={['fas', 'arrow-down']} style={{ color: "#ffffff" }} />
                                        :
                                        <FontAwesomeIcon icon={['fas', 'arrow-up']} style={{ color: "#ffffff" }} />
                                }
                            </div>
                            <div className={`${styles.moreLinks} ${styles.links} ${showMoreLinks ? styles.show : ''}`}>
                                <a href="#">Terms</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Refund Policy</a>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.responsiveDownpart}`}>
                        <div className={`${styles.firstPart}`}>
                            <div className={`${styles.logoDiv}`}>
                                <img src="images/footerLogo.png" alt="" />
                            </div>
                            <p>
                                Making the world a smaller place.
                                One move at a time.
                            </p>
                        </div>
                        <div className={`${styles.thirdPart}`}>
                            <div className={`${styles.iconDiv}`}>
                                {
                                    options.map((option, index) => (
                                        <FooterIcon
                                            key={index}
                                            backColor={option.backColor}
                                            iconUrl={option.iconUrl}
                                        />
                                    ))
                                }
                            </div>
                            <p>Download our app</p>
                            <div className={`${styles.storeDiv}`}>
                                <img src="images/Google Play.png" alt="Goolge Play" />
                                <img src="images/Play store.png" alt="Play store" />
                            </div>
                        </div>
                    </div>
                </div>
                <p className={`${styles.footerLetter}`}>All rights reserved, Movemint App Inc</p>
            </div>
        </div>
    )
}

export default Footer