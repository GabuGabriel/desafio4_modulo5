import '../App.css'
import Card from './../components/Card'
import { useContext } from 'react'
import { PizzaContexto } from '../Contexto/PizzaContexto'

const Home = () => {
  const { pizzas } = useContext(PizzaContexto);

  return (
    <>
      <div className='containerHome'>
        <h1>
          ¡Pizzeria Mamma Mia! <br /> <span>Tenemos las mejores pizzas</span>{' '}
        </h1>
      </div>
      <div className='divcatalogo'>
        <h2>Catalogo de Pizzas</h2>
        <div className='pizzaList'>
          {pizzas.map((pizza, index) => (
            <Card key={index} pizza={pizza} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;