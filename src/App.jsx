import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Detalle from './views/Detalle'
import Home from './views/Home'
import Pagina404 from './views/404'
import { Provider } from './Contexto/PizzaContexto'
import Carrito from './views/Carrito'

function App () {
  return (
    <BrowserRouter>
      <Provider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Detalle/:id' element={<Detalle />} />
          <Route path='/Carrito' element={<Carrito />} />
          <Route path='*' element={<Pagina404 />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
