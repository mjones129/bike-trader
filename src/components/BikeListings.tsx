import { useState, useEffect } from 'react';
import SingleBikeListing from './SingleBikeListing';
import Spinner from './Spinner';

const BikeListings = ({ isHome = false }) => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const res = await fetch('http://localhost:8000/bikes');
        const data = await res.json();
        setBikes(data);
      } catch (error) {
        console.log('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBikes();

  }, []);

  return (
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-lime-500 mb-6 text-center">
          {isHome ? 'New Arrivals' : 'Browse Bikes'}
        </h2>
      {loading ? (
      <Spinner loading={loading} />
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bikes.map((bike) => (
          <SingleBikeListing key={bike.id} bike={bike} />
        ))}
        </div>
      )}
      </div>
  );
};

export default BikeListings
