import React from 'react'
import bikes from '../bikes.json';
import SingleBikeListing from './SingleBikeListing';

const BikeListings = ({ isHome = false }) => {
  const bikeListings = isHome ? bikes.slice(0, 3) : bikes;
  return (
    <>
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-lime-500 mb-6 text-center">
          {isHome ? 'New Arrivals' : 'Browse Bikes'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bikeListings.map((bike) => (
            <SingleBikeListing key={bike.id} bike={bike} />
          ))}
        </div>
      </div>
    </>
  )
}

export default BikeListings
