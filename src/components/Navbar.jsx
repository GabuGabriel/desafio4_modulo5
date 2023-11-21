import { NavLink } from 'react-router-dom'
import { PizzaContexto } from '../Contexto/PizzaContexto'
import { useContext } from 'react'
import '../App.css'

export default function Navbar () {
  const setActiveClass = ({ isActive }) => (isActive ? 'active' : undefined)
  const {  precioTotal } = useContext(PizzaContexto)
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
            Carrito: {precioTotal}
          </NavLink>
        </div>
      </nav>
    </>
  )
}
