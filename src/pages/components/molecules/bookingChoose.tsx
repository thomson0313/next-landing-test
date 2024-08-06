import styles from '../../../styles/molecules/bookingChoose.module.css'

export default function bookingChoose({iconUrl, backColor, title, content} : any) {
    return (
        <div className={`${styles.body}`}>
            <div className={`${styles.iconSection}`} style={{backgroundColor:`${backColor}`}}>
                <img src={iconUrl} alt="" />
            </div>
            <div className={`${styles.description}`}>
                <p className={`${styles.title}`}>{title}</p>
                <p className={`${styles.content}`}>{content}</p>
            </div>
        </div> 
    )
}