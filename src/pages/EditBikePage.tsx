import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

const EditBikePage = ({ updateBikeSubmit }: { updateBikeSubmit: any }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const bike: any = useLoaderData();
  const [make, setMake] = useState(bike.make);
  const [model, setModel] = useState(bike.model);
  const [year, setYear] = useState(bike.year);
  const [displacement, setDisplacement] = useState(bike.displacement);
  const [image, setImage] = useState(bike.image);
  const [price, setPrice] = useState(bike.price);

  const submitForm = (e: any) => {
    e.preventDefault();
    const updatedBike = {
      id,
      make,
      model,
      year,
      displacement,
      image,
      price
    }
    updateBikeSubmit(updatedBike);

    toast.success('Bike successfully updated.');

    return navigate(`/bikes/${id}`);
  }

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Edit Bike</h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
              >Make</label
              >
              <input
                type="text"
                id="make"
                name="make"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Kawasaki, Harley-Davidson..."
                required
                value={make}
                onChange={(e) => setMake(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
              >Model</label
              >
              <input
                type="text"
                id="model"
                name="model"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Ninja H2, Road Glide..."
                required
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Year
              </label>
              <input
                type='text'
                id='year'
                name='year'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Model Year'
                required
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Engine Displacement
              </label>
              <input
                type='text'
                id='displacement'
                name='displacement'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Engine Displacement'
                required
                value={displacement}
                onChange={(e) => setDisplacement(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Price
              </label>
              <input
                type='text'
                id='price'
                name='price'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Engine Displacement'
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Image URL
              </label>
              <input
                type='text'
                id='image'
                name='image'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='https://your-bike/pic.jpg'
                required
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Edit Bike
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EditBikePage
