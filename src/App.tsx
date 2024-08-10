import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardContainer from './components/CardContainer';
import BikeListings from './components/BikeListings';
import ViewAllBikes from './components/ViewAllBikes';
import MainLayout from './layouts/MainLayout';
import BikesPage from './pages/BikesPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/bikes" element={<BikesPage />} />
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
