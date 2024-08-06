import styles from '../../../styles/sections/sixthIndex.module.css';

export default function SixthIndex() {
    return (
        <div className={`${styles.body}`}>
            <div className={`${styles.mainBack}`}>
                <div className={`${styles.mailSendingBack}`}>
                    <div className={`${styles.zIndexDiv}`}>
                        <p>
                            Subscribe to get information, latest news and other
                            interesting offers about Movemint.
                        </p>
                        <div className={`${styles.inputDiv}`}>
                            <div className={`${styles.input}`}>
                                <input type="text" placeholder='Your email' />
                                <img src="images/icons/mail.png" alt="" />
                            </div>
                            <button>Subscribe</button>
                        </div>
                    </div>
                    <div className={`${styles.sendIconDiv}`}>
                        <img src="images/icons/bigSend.png" alt="" />
                    </div>
                    <div className={`${styles.starsDiv}`}>
                        <img src="images/anStars.png" alt="" />
                    </div>
                    <div className={`${styles.rightTopBordersDiv}`}>
                        <img src="images/bordersRight.png" alt="" />
                    </div>
                    <div className={`${styles.leftBottomBordersDiv}`}>
                        <img src="images/bordersLeft.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}