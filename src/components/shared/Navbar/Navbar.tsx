import { Link } from 'react-router-dom';
import { logo } from '../../../assets';

export default function Navbar() {
  return (
    <header className="py-4 border-b border-b-gray-200">
      <nav className="flex justify-between">
        <Link to="../" className="flex items-center gap-1">
          <img
            src={logo}
            alt="logo do Task Manager"
            className="w-7 cursor-pointer"
          />
          <span className="text-2xl text-primary font-bold">Task Manager</span>
        </Link>

        <ul className="flex gap-2">
          <li>
            <Link to="/login">
              <button className="px-4 py-2 bg-primary rounded-xl text-white">
                Login
              </button>
            </Link>
          </li>
          <li>
            <Link to="/cadastro">
              <button className="px-4 py-2 bg-white border-gray-400 border rounded-xl">
                Cadastro
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
