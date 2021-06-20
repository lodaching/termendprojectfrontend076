import style from './HomePage.module.scss'
import HomePageItem from './HomePageItem'

export default function HomePage({ datas }) {

  const stages = {
    "國小":"elementary",
    "國中":"junior",
    "高中":"senior",
    "大學":"university",
}

    return (
      <div className={style.home}>
        <h1 className={style.title}>408220076羅大慶</h1>
        <h1 className={style.title}>作品集</h1>
        <div className={style.cardList}>
          {datas.map(({Title, url, description, id}) => (
            <HomePageItem key={id} title={Title} image={url} description={description} href={'introduce/' + stages[Title]}/>
          ))}
        </div>

      </div>
      
    )
  }