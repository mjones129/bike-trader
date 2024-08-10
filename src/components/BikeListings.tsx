import React from 'react'
import bikes from '../bikes.json';
import SingleBikeListing from './SingleBikeListing';

const BikeListings = () => {
  const newArrivals = bikes.slice(0, 3);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-lime-500 mb-6 text-center">
          Browse Bikes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newArrivals.map((bike) => (
            <SingleBikeListing key={bike.id} bike={bike} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BikeListings
