import style from './IntroduceItem.module.scss'

export default function IntroduceItem({image, title, description}) {
    return (
        <div className={style.card}>
            
            <div className={style.title}>
                <h4>{title}</h4>
            </div>
            <img src={image} className={style.image}/>
            <div className={style.content}>
                <p>{description}</p>
            </div>
        </div>
    )
}