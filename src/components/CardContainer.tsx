import React from 'react'
import Card from './Card'

const CardContainer = () => {
  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <Card>
            <h2 className='text-2xl font-bold'>For Buyers</h2>
            <p className='mt-2 mb-4'>
              Explore the latest bikes and find your dream machine.
            </p>
            <a href="#" className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'>
              Browse Bikes
            </a>
          </Card>
          <Card>
            <h2 className='text-2xl font-bold'>For Sellers</h2>
            <p className='mt-2 mb-4'>
              List your bike and start getting offers today.
            </p>
            <a href="#" className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'>
              List Bike
            </a>
          </Card>
        </div>
      </div>
    </section >
  )
}

export default CardContainer  
