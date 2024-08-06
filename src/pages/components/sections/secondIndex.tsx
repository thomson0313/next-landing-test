import styles from '../../../styles/sections/secondIndex.module.css';
import BookingChoose from '../molecules/bookingChoose';
import CardContactIcon from '../atoms/cardContactIcon';

export default function SecondIndex() {
    const options = [
        { iconUrl: 'images/icons/destination.png', backColor: '#F0BB1F;', title: 'Choose Destination', content: 'Pick from a popular destination or enter your own destination for your next move.' },
        { iconUrl: 'images/icons/mover.png', backColor: '#F15A2B;', title: 'Submit Your Move', content: 'Scan your home and submit your project to receive bids.' },
        { iconUrl: 'images/icons/cam.png', backColor: '#006380;', title: 'Choose Your Mover', content: 'Review real time bids from trusted movers and choose the one that you like best.' }
    ]
    const imgUrls = [
        {iconUrl:'images/icons/leaf.png'},
        {iconUrl:'images/icons/map.png'},
        {iconUrl:'images/icons/send.png'}
    ]
    return (
        <div className={`${styles.body}`}>
            <div className={`${styles.background}`}>
                <div className={`${styles.mainBack}`}>
                    <p className={`${styles.text}`}>MOVING MADE SIMPLE</p>
                    <div className={`${styles.content}`}>
                        <div className={`${styles.leftContent}`}>
                            <p className={`${styles.title}`}>
                                Book your next Move
                                in 3 easy steps
                            </p>
                            <div className={`${styles.childContent}`}>
                                {options.map((option, index) => (
                                    <BookingChoose
                                        key={index}
                                        iconUrl={option.iconUrl}
                                        backColor={option.backColor}
                                        title={option.title}
                                        content={option.content}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={`${styles.rightContent}`}>
                            <div className={`${styles.card}`}>
                                <div className={`${styles.img}`}>
                                    <img src="images/cardImg.png" alt="card-img" />
                                </div>
                                <div className={`${styles.cardContent}`}>
                                    <p className={`${styles.cardTitle}`}>Trip To Greece</p>
                                    <div className={`${styles.cardIdea}`}> 
                                        <p className={`${styles.cardIdeaDate}`}>14-29 June</p>
                                        <img src="images/icons/line.png" alt="line" />
                                        <p className={`${styles.cardIdeaOwner}`}>by Robbin joseph</p>
                                    </div>
                                    <div className={`${styles.contactIcons}`}>
                                        {
                                            imgUrls.map((img, index)=>(
                                                <CardContactIcon 
                                                    key={index}
                                                    iconUrl={img.iconUrl}
                                                />
                                            ))
                                        }
                                    </div>
                                    <div className={`${styles.cardFooter}`}>
                                        <div className={`${styles.cardFooterLeftPart}`}>
                                            <img src="images/icons/building.png" alt="" />
                                            <p className={`${styles.cardFooterLetter}`}>Atlas Van Lines</p>
                                        </div>
                                        <div className={`${styles.heartIconDiv}`}>
                                            <img src="images/icons/heart.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.inProgressCard}`}>
                                <div className={`${styles.imgDiv}`}>
                                        <img src="images/palace.png" alt="" />
                                </div>
                                <div className={`${styles.statusPart}`}>
                                    <p>In Progress</p>
                                    <p>In Transit</p>
                                    <p> <span>40%</span> completed</p>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}