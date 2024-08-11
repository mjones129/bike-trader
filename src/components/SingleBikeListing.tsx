import React from 'react';
import engineIcon from '../assets/images/engine-icon.svg';
import { Link } from 'react-router-dom';

const SingleBikeListing = ({ bike }) => {
  return (
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

        <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
          <div className="text-dark mb-3">
            <i className="fa-solid fa-location-dot text-lg"></i>
            <p> <img className="size-8" src={engineIcon} /> {bike.displacement}</p>
          </div>
          <Link
            to={`/bikes/${bike.id}`}
            className="bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SingleBikeListing
