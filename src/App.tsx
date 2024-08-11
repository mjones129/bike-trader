import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import BikesPage from './pages/BikesPage';
import NotFoundPage from './pages/NotFoundPage';
import BikePage, { bikeLoader } from './pages/BikePage';
import AddBikePage from './pages/AddBikePage';



function App() {
  //add new bike
  const addBike = async (newBike) => {
    const res = await fetch('/api/bikes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBike)
    });
    return;
  };

  //delete bike
  const deleteBike = async (id) => {
    const res = await fetch(`/api/bikes/${id}`, {
      method: 'DELETE',
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/bikes" element={<BikesPage />} />
        <Route path="/bikes/:id" element={<BikePage deleteBike={deleteBike} />} loader={bikeLoader} />
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
