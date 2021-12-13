import CardContainer from '../components/CardContainer'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'

interface HomeProps {}

function Home({}: HomeProps) {
  return (
    <>
      <Hero />
      <SearchBar />
      <CardContainer />
    </>
  )
}

export default Home
