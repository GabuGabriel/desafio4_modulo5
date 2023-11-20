import { useState, useEffect, createContext } from 'react'

export const PizzaContexto = createContext()

export const Provider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const getData = async () => {
    const res = await fetch('./pizzas.json')
    const data = await res.json()
    setPizzas(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const globalState = {
    pizzas
  }

  return (
    <PizzaContexto.Provider value={globalState}>{children}</PizzaContexto.Provider>
  )
}
