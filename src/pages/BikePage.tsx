import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';



const BikePage = ({ deleteBike }: { deleteBike: any }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const bike: any = useLoaderData();

  const onDeleteClick = (bikeId: any) => {
    window.confirm('Are you sure you want to delete this bike?');
    if (!confirm) return;

    deleteBike(bikeId);

    toast.error('Bike deleted.');

    navigate('/bikes');
  }

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/bikes"
            className="text-lime-500 hover:text-lime-600 flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Bike Listings
          </Link>
        </div>
      </section>

      <section className="bg-lime-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div
                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
              >
                <div className="text-gray-500 mb-4">{bike.make}</div>
                <h1 className="text-3xl font-bold mb-4">
                  {bike.model}
                </h1>
                <img src={bike.image} />
                <div
                  className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                >
                  <i
                    className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                  ></i>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lime-800 text-lg font-bold mb-6">
                  Bike Description
                </h3>

                <p className="mb-4">
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                </p>

                <h3 className="text-lime-800 text-lg font-bold mb-2">Price</h3>

                <p className="mb-4">{bike.price}</p>
              </div>
            </main>

            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Seller Info</h3>

                <h2 className="text-2xl">Rad Bikes</h2>

                <p className="my-2">
                  Rad Bikes is a leading motorcycle dealership specializing in rad bikes, parts, and accessories. We pride ourselves on delivering high-quality products and services to our clients and teaching you to ride if you don't know how.
                </p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-lime-100 p-2 font-bold">
                  contact@radbikes.com
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-lime-100 p-2 font-bold">555-555-5555</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Bike</h3>
                <Link
                  to={`/edit-bike/${id}`}
                  className="bg-lime-500 hover:bg-lime-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Bike</Link
                >
                <button onClick={() => onDeleteClick(bike.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Bike
                </button>
              </div>
            </aside>
          </div>
        </div >
      </section >
    </>
  );


};

const bikeLoader = async ({ params }: { params: any }) => {
  const res = await fetch(`/api/bikes/${params.id}`);
  const data = await res.json();
  return data;
}

export { BikePage as default, bikeLoader };
