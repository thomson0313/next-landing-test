import styles from '../../../styles/sections/fifthIndex.module.css'
import SwiperSlideIcon from '../slides/swiperIconSlide';
export default function FifthIndex() {
    return (
        <div className={`${styles.body}`}>
            <div className={`${styles.mainBack}`}>
                <div className={`${styles.Res}`}>
                    <SwiperSlideIcon />
                </div>
                <div className={`${styles.nonRes}`}>
                    <div>
                        <img src="images/image 27.png" alt="" />
                    </div>
                    <div>
                        <img src="images/image 28.png" alt="" />
                    </div>
                    <div>
                        <img src="images/image 29.png" className={`${styles.whiteBoard}`} alt="" />
                    </div>
                    <div>
                        <img src="images/image 30.png" alt="" />
                    </div>
                    <div>
                        <img src="images/image 31.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
