import style from './HomePageItem.module.scss'

export default function HomePageItem({image, title, description}) {
    return (
        <div className={style.card}>
            
            <img src={image} className={style.image}/>
            <div className={style.title}>
                <h4>{title}</h4>
            </div>
            <div className={style.content}>
                <p>{description}</p>
            </div>
        </div>
    )
}