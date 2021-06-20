import HomePage from '../components/HomePage'

export async function getServerSideProps() {
  const response = await fetch('https://termendproject076.herokuapp.com/Preferences')
  const datas = await response.json()

  return {
    props: {
      datas
    }
  }
}

export default function Home({datas}) {
  return (
    <HomePage datas={datas}/>
  )
}
