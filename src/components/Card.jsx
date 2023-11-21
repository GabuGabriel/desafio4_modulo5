import { useContext } from "react"
import { PizzaContexto } from "../Contexto/PizzaContexto"
import '../App.css'

const Card = ({ pizza }) => {
  const { name, img, ingredients, price } = pizza
  return (
    <div className='cardcontainer'>
      <img src={img} alt={name} />
      <div className='carddetail'>
        <h2>{name}</h2>
        <hr />
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <hr />
        <p>Precio: {price}</p>
        <button>Detalle</button>
        <button>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default Card
