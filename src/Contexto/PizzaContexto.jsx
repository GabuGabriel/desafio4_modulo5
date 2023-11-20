import { useState, useEffect, createContext } from 'react'

export const PizzaContexto = createContext()

export const Provider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [carrito, setCarrito] = useState([])
  const [precio, setPrecio] = useState([])
  const [precioTotal, setPrecioTotal] = useState(0)

  const getData = async () => {
    const res = await fetch('./pizzas.json')
    const data = await res.json()
    setPizzas(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const globalState = {
    pizzas,
    carrito,
    precio,
    setCarrito,
    setPrecio,
    precioTotal,
    setPrecioTotal
  }

  return (
    <PizzaContexto.Provider value={globalState}>{children}</PizzaContexto.Provider>
  )
}
