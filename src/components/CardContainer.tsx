import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

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
            <Link
              to="/bikes" className='inline-block bg-lime-500 text-white rounded-lg px-4 py-2 hover:bg-lime-600'>
              Browse Bikes
            </Link>
          </Card>
          <Card bg="bg-lime-100">
            <h2 className='text-2xl font-bold'>For Sellers</h2>
            <p className='mt-2 mb-4'>
              List your bike and start getting offers today.
            </p>
            <Link
              to="/add-bike" className='inline-block bg-lime-500 text-white rounded-lg px-4 py-2 hover:bg-lime-600'>
              List Bike
            </Link>
          </Card>
        </div>
      </div>
    </section >
  )
}

export default CardContainer  
