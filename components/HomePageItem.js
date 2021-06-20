import style from './HomePageItem.module.scss'
import Image from 'next/image';

export default function HomePageItem({image, title, description, href}) {

    return (
        <a href={href}>
            <div className={style.card}>
                
                {/* <img src={image} className={style.image}/> */}
                <Image src={image} className={style.image} width={320} height={500}/>
                <div className={style.title}>
                    <h4>{title}</h4>
                </div>
                <div className={style.content}>
                    <p>{description}</p>
                </div>
            </div>

        </a>
    )
}