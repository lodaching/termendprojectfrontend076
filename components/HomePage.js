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
        <h1 className={style.title}>我的作品集</h1>
        <div className={style.cardList}>
          {datas.map(({Title, url, description, id}) => (
            <HomePageItem key={id} title={Title} image={url} description={description} href={'introduce/' + stages[Title]}/>
          ))}
        </div>
        {/* <HomePageItem title='title' description='description' image='https://res.cloudinary.com/dvedvf7xw/image/upload/v1624177546/large_12027265_177418039263478_3993026811607921277_o_8ba5d0c651.jpg'/> */}

      </div>
      
    )
  }