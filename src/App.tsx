import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import BikesPage from './pages/BikesPage';
import NotFoundPage from './pages/NotFoundPage';
import BikePage, { bikeLoader } from './pages/BikePage';
import AddBikePage from './pages/AddBikePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/bikes" element={<BikesPage />} />
      <Route path="/bikes/:id" element={<BikePage />} loader={bikeLoader} />
      <Route path="/add-bike" element={<AddBikePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
