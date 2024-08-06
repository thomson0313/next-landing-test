import styles from '../../../styles/atoms/footerIcon.module.css';

export default function footerIcon({backColor, iconUrl}:any) {
    return (
        <div className={`${styles.body}`} style={{background:`${backColor}`}}>
            <img src={iconUrl} alt="" />
        </div>
    )
}
