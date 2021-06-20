import IntroducePage from '../../components/IntroducePage'

export async function getServerSideProps() {
  const response = await fetch('https://termendproject076.herokuapp.com/Introduces')
  const datas = await response.json()

  return {
    props: {
      datas
    }
  }
}

export default function elementary({datas}) {
  return (
    <IntroducePage datas={datas} title={'大學'}/>
  )
}
