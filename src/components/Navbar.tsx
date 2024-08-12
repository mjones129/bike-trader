import motorcycle from '../assets/images/motorcycle.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }: { isActive: any }) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
  return (
    <nav className="bg-lime-700 border-b border-lime-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <a className="flex flex-shrink-0 items-center mr-4" href="/">
              <img
                className="h-10 w-auto"
                src={motorcycle}
                alt="Bike Trader"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
              >Bike Trader</span
              >
            </a>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass}
                >Home</NavLink>
                <NavLink
                  to="/bikes"
                  className={linkClass}
                >Bikes</NavLink>
                <NavLink
                  to="/add-bike"
                  className={linkClass}
                >Add Bike</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar




