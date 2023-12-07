import { NavLink, Outlet } from 'react-router-dom';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './Layout.css';

type LinkActive = { isActive: boolean };

const isActiveLink = ({ isActive }: LinkActive) => `link ${isActive ? 'active' : ''}`;

export const Layout = () => {
    return (
        <>
            <nav className="topNav">
                <NavLink className={isActiveLink} to="/">Home 🏠</NavLink>
                <NavLink className={isActiveLink} to="/create">Create ✍️</NavLink>
            </nav>

            <div className='container'>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React + React Query</h1>
                <Outlet />
            </div>
        </>
    )
}