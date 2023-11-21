import { NavLink } from 'react-router-dom'
import '../App.css'

export default function Navbar () {
  const setActiveClass = ({ isActive }) => (isActive ? 'active' : undefined)
  return (
    <>
      <nav className='navcss'>
        <div className='divlinks'>
          <span>🍕</span>
          <NavLink className={setActiveClass} to='/'>
            Pizzeria Mamma Mia
          </NavLink>
        </div>
        <div className='divlinks'>
          <span>🛒</span>
          <NavLink className={setActiveClass} to='/Carrito'>
            Carrito
          </NavLink>
        </div>
      </nav>
    </>
  )
}
