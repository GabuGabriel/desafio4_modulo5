import { useContext } from 'react'
import { PizzaContexto } from '../Contexto/PizzaContexto'
import { useParams } from 'react-router-dom'
import '../App.css'

const Detalle = () => {
  const { id } = useParams()
  const { pizzas } = useContext(PizzaContexto)

  const pizza = pizzas.find((p) => p.id === id)

  if (!pizza) {
    return <p>Pizza no encontrada</p>
  }

  const { name, img, ingredients, price } = pizza

  return (
    <div className='containerdetalle'>
      <img src={img} alt={name} />
      <h1>{name}</h1>
      <p>Descripción de la pizza: {pizza.desc}</p>
      <h2>Ingredientes</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <hr />
      <p>Precio: {price}</p>
      <button>Agregar al carrito</button>
    </div>
  )
}

export default Detalle
