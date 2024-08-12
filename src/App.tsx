import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import BikesPage from './pages/BikesPage';
import NotFoundPage from './pages/NotFoundPage';
import BikePage, { bikeLoader } from './pages/BikePage';
import AddBikePage from './pages/AddBikePage';
import EditBikePage from './pages/EditBikePage';



function App() {
  //add new bike
  const addBike = async (newBike: any) => {
    await fetch('/api/bikes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBike)
    });
    return;
  };

  //delete bike
  const deleteBike = async (id: any) => {
    await fetch(`/api/bikes/${id}`, {
      method: 'DELETE',
    });
    return;
  }

  //edit bike
  const updateBike = async (bike: any) => {
    await fetch(`/api/bikes/${bike.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bike)
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/bikes" element={<BikesPage />} />
        <Route path="/bikes/:id" element={<BikePage deleteBike={deleteBike} />} loader={bikeLoader} />
        <Route path="/edit-bike/:id" element={<EditBikePage updateBikeSubmit={updateBike} />} loader={bikeLoader} />
        <Route path="/add-bike" element={<AddBikePage addBikeSubmit={addBike} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
