import React from 'react'
import bikes from '../bikes.json';

const BikeListings = () => {
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-lime-500 mb-6 text-center">
          Browse Bikes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bikes.map((bike) => (
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">{bike.make}</div>
                  <h3 className="text-xl font-bold">{bike.model}</h3>
                </div>

                <img className="mb-3 rounded-lg" src={bike.image} />

                <h3 className="text-lime-500 mb-2">{bike.price}</h3>

                <h6 className="text-lime-500 mb-2">{bike.year}</h6>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    {bike.displacement}
                  </div>
                  <a
                    href="job.html"
                    className="h-[36px] bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BikeListings
