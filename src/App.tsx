import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import CardContainer from './components/CardContainer';
import BikeListings from './components/BikeListings';

function App() {

  return (
    <>
      <Navbar />
      <Hero title="Find Your Next Bike" subtitle="Buy, Sell, and Trade" />
      <CardContainer />
      <BikeListings />




      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
        >
      </section>
    </>
  )
}

export default App
