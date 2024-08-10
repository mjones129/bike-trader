import BikeListings from '../components/BikeListings'
import CardContainer from '../components/CardContainer'
import Hero from '../components/Hero'
import ViewAllBikes from '../components/ViewAllBikes'

const HomePage = () => {
  return (
    <>
      <Hero title="Find Your Next Ride" subtitle="Buy, Sell, and Trade" />
      <CardContainer />
      <BikeListings />
      <ViewAllBikes />
    </>
  )
}

export default HomePage
