import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { } from 'swiper';
import 'swiper/swiper-bundle.css'; // Correct CSS import
import styles from '../../../styles/sections/fifthIndex.module.css'

const SwiperSlideIcon = () => {

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            centeredSlides={false}
            loop={true}
            breakpoints={{
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                },
                360: {
                    slidesPerView: 1.3,
                    spaceBetween: 10,
                },
                420: {
                    slidesPerView: 1.4,
                    spaceBetween: 0,
                },
                500: {
                    slidesPerView: 1.7,
                    spaceBetween: 0,
                },
                668: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                800: {
                    slidesPerView: 2.4,
                    spaceBetween: 10,
                },
                868: {
                    slidesPerView: 2.8,
                    spaceBetween: 10,
                },
                957: {
                    slidesPerView: 3.2,
                    spaceBetween: 10,
                },
                1107: {
                    slidesPerView: 4.3,
                    spaceBetween: 10,
                },
                1324: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
                1500: {
                    slidesPerView: 5.5,
                    spaceBetween: 30,
                },
                1700: {
                    slidesPerView: 7,
                    spaceBetween: 10,
                }
            }}
        >
            <SwiperSlide>
                <div className={`${styles.slideIcon1}`}>
                    <img src="images/image 27.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.slideIcon2}`}>
                    <img src="images/image 28.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                    <div className={`${styles.whiteBoard} ${styles.slideIcon3}`}>
                        <img src="images/image 29.png" alt="" />
                    </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.slideIcon4}`}>
                    <img src="images/image 30.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.slideIcon5}`}>
                    <img src="images/image 31.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.slideIcon1}`}>
                    <img src="images/image 27.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.slideIcon2}`}>
                    <img src="images/image 28.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                    <div className={`${styles.whiteBoard} ${styles.slideIcon3}`}>
                        <img src="images/image 29.png" alt="" />
                    </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.slideIcon4}`}>
                    <img src="images/image 30.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.slideIcon5}`}>
                    <img src="images/image 31.png" alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperSlideIcon;
