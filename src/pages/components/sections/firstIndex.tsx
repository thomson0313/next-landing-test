import styles from '../../../styles/sections/firstIndex.module.css'
import IndividualInput from '../molecules/individualInput'

export default function FirstIndex() {

    const inputs = [
        { label: 'From', imgUrl: 'images/icons/from.png', option: 'Los Angeles, California' },
        { label: 'To', imgUrl: 'images/icons/to.png', option: 'Tokyo, Japan' },
        { label: 'Date', imgUrl: 'images/icons/date.png', option: 'February 22 2024' },
    ];

    return (
        <div className={`${styles.body}`}>
            <div className={`${styles.background} `}>
                <div className={`${styles.overlayBack}`}>
                    <div className={`${styles.mainContent}`}>
                        <p className={`${styles.textSection}`}>
                            Moving People and Making The World A Smaller Place.
                        </p>
                        <div className={`${styles.inputSection}`}>
                            <p className={`${styles.getHomeText}`}>Lets get to your next home.</p>
                            <div className={`${styles.mainInput}`}>
                                {inputs.map((input, index) => (
                                    <IndividualInput
                                        key={index}
                                        label={input.label}
                                        imgUrl={input.imgUrl}
                                        option={input.option}
                                    />
                                ))}
                                <div className={`${styles.swapIcon}`}>
                                    <img src="images/icons/swap-icon.png" alt="" />
                                </div>
                                <div className={`${styles.letsGoBtn}`}>
                                    Lets go
                                </div>
                            </div>
                            <p className={`${styles.bottomContent}`}>
                                Join us at Movemint and experience the ease of moving with a touch of minty freshness. Because when we move together, we make the world a smaller, more accessible place.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 