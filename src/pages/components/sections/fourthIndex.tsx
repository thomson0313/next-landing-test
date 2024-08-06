import styles from '../../../styles/sections/fourthIndex.module.css'

export default function FourthIndex() {
    return (
        <div className={`${styles.body}`}>
            <div className={`${styles.mainBack}`}>
                <div className={`${styles.introLetters}`}>
                    <p className={`${styles.title}`}>
                        Testimonials
                    </p>
                    <p className={`${styles.bigTitle}`}>
                        Why our customers
                        love movemint.
                    </p>
                    <div className={`${styles.bulletsDiv}`}>
                        <img src="images/icons/bullets.png" alt="" />
                    </div>
                </div>
                <div className={`${styles.cardsPart}`}>
                    <div className={`${styles.upCard}`}>
                        <div className={`${styles.avatarDiv}`}>
                            <img src="images/icons/avatar.png" alt="" />
                        </div>
                        <p className={`${styles.content}`}>
                            “Movemint is amazing, and I’m very happy I got connected with them to help facilitate my move in an easy and straightforward fashion..”
                        </p>
                        <div className={`${styles.bottomLetter}`}>
                            <p>Mike taylor</p>
                            <p>Lahore, Pakistan</p>
                        </div>
                        <div className={`${styles.underCard}`}>
                            <p>Chris Thomas</p>
                            <p>CEO of Red Button</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.arrows}`}>
                    <div className={`${styles.arrowUp}`}>
                        <img src="images/icons/arrow-up.png" alt="" />
                    </div>
                    <div className={`${styles.arrowDown}`}>
                        <img src="images/icons/arrow-down.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}