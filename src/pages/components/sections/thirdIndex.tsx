import styles from '../../../styles/sections/thirdIndex.module.css';
import RecommendedCard from '../molecules/recommendedCard';
import SwiperComponent from '../slides/swiperSlide';

export default function ThirdIndex() {
    const options = [
        { imgUrl: 'images/atlas.png', destination: 'Atlas Van Lines', intro: 'Los Angeles, CA' },
        { imgUrl: 'images/truck.png', destination: 'International Van Lines', intro: 'Irvine, CA' },
        { imgUrl: 'images/baggage.png', destination: 'JK Van Lines', intro: 'Los Angeles' },
    ]
    return (
        <div className={`${styles.body}`}>
            <div className={`${styles.mainBack}`}>
                <p>MOST POPULAR</p>
                <div className={`${styles.recommendedMoversDiv}`}>
                    <p>Recommended Movers</p>
                    <a href='#'>See All</a>
                </div>
                <div className={`${styles.cardSection}`}>
                    {
                        options.map((option, index) => (
                            <RecommendedCard
                                key={index}
                                imgUrl={option.imgUrl}
                                destination={option.destination}
                                intro={option.intro}
                            />
                        ))
                    }
                </div>
                <div className={`${styles.swiperResponse}`}>
                    <SwiperComponent />
                </div>
                <div className={`${styles.hurricanDiv}`}>
                    <img src="images/decore.png" alt="decore" />
                </div>
            </div>
            <div className={`${styles.starsImgDiv}`}>
                <img src="images/stars.png" alt="stars" />
            </div>
        </div>
    )
}