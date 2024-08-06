import styles from '../../../styles/molecules/recommendedCard.module.css';

export default function recommendedCard({ imgUrl, destination, intro }:any) {
    return (
        <div className={`${styles.body}`}>
            <img src={imgUrl} alt="" />
            <img src="images/icons/rate.png" alt="" />
            <div className={`${styles.description}`}>
                <p>{intro}</p>
                <div className={`${styles.destinationPart}`}>
                    <img src="images/icons/navigation.png" alt="" />
                    <p>{destination}</p>
                </div>
            </div>
        </div>
    )
}
