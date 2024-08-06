import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css'; // Correct CSS import
import RecommendedCard from '../molecules/recommendedCard';

const SwiperComponent = () => {
    const options = [
        { imgUrl: 'images/atlas.png', destination: 'Atlas Van Lines', intro: 'Los Angeles, CA' },
        { imgUrl: 'images/truck.png', destination: 'International Van Lines', intro: 'Irvine, CA' },
        { imgUrl: 'images/baggage.png', destination: 'JK Van Lines', intro: 'Los Angeles' },
        { imgUrl: 'images/atlas.png', destination: 'Atlas Van Lines', intro: 'Los Angeles, CA' },
        { imgUrl: 'images/truck.png', destination: 'International Van Lines', intro: 'Irvine, CA' },
        { imgUrl: 'images/baggage.png', destination: 'JK Van Lines', intro: 'Los Angeles' }
    ]
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            centeredSlides={false}
            loop={true}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                },
                500: {
                    slidesPerView: 1.1,
                    spaceBetween: 40,
                },
                568: {
                    slidesPerView: 1.2,
                    spaceBetween: 40,
                },
                668: {
                    slidesPerView: 1.4,
                    spaceBetween: 40,
                },
                768: {
                    slidesPerView: 1.6,
                    spaceBetween: 40,
                },
                800: {
                    slidesPerView: 1.7,
                    spaceBetween: 40,
                },
                868: {
                    slidesPerView: 1.8,
                    spaceBetween: 40,
                },
                957: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1107: {
                    slidesPerView: 2.3,
                    spaceBetween: 40,
                },
                1324: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                1500: {
                    slidesPerView: 3.4,
                    spaceBetween: 60,
                },
                1700: {
                    slidesPerView: 3.8,
                    spaceBetween: 60,
                }
            }}
        >
            {options.map((option, index) => (
                <SwiperSlide key={index}>
                    <RecommendedCard
                        imgUrl={option.imgUrl}
                        destination={option.destination}
                        intro={option.intro}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperComponent;
