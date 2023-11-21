import { useContext } from 'react'
import { PizzaContexto } from '../Contexto/PizzaContexto'
import '../App.css'

const Carrito = () => {
  const { carrito, precioTotal } = useContext(PizzaContexto)

  return (
    <div className='containercarrito'>
      <h1>Detalle del pedido</h1>
      <table>
        <thead>
          <tr>
            <th>Pizza</th>
            <th>Pizza Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((pizza) => (
            <tr key={pizza.id}>
              <td>
                <img src={pizza.img} alt={pizza.name} height={50} width={50} />
              </td>
              <td>{pizza.name}</td>
              <td>${pizza.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total: ${precioTotal}</h4>
    </div>
  )
}

export default Carrito
