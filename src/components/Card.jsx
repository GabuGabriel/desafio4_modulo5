import { Link } from 'react-router-dom'
import { useContext } from "react"
import { PizzaContexto } from "../Contexto/PizzaContexto"
import '../App.css'

const Card = ({ pizza }) => {
  const { id, name, img, ingredients, price } = pizza
  return (
    <div className='cardcontainer'>
      <div className='imagencard'>
        <img src={img} alt={name} height={200} width={200} />
      </div>
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
        <Link to={`/Detalle/${id}`}>
          <button>Detalle</button>
        </Link>
        <button>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default Card
