import React from 'react'

const Card = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">For Buyers</h2>
      <p className="mt-2 mb-4">
        Browse bikes and find your next dream machine
      </p>
      <a
        href="/jobs.html"
        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
      >
        Browse Bikes
      </a>
    </div>
  )
}

export default Card
