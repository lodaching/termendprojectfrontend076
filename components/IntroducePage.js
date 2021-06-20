import style from './IntroducePage.module.scss'
import IntroduceItem from './IntroduceItem'

export default function IntroducePage({ datas, title }) {


    return (
      <div className={style.home}>
        <h2 className={style.title}>{title}的我</h2>
        <div className={style.cardList}>
          {datas.map(({Title, url, description, id, Stage}) => {
                if (title === Stage) {
                    return <IntroduceItem key={id} title={Title} image={url} description={description}/>
                }
          })}
        </div>
      </div>
      
    )
  }