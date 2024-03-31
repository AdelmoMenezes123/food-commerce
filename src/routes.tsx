import { Route, Routes } from 'react-router-dom'

import MainPage from './pages/Main'
import BebidasPage from './pages/Main/Bebidas'
import BurgersPage from './pages/Main/Burgers'
import PizzasPage from './pages/Main/Pizzas'
import SorvetesPage from './pages/Main/Sorvetes'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurgersPage />} />
        <Route path='/pizzas' element={<PizzasPage />} />
        <Route path='/Bebidas' element={<BebidasPage />} />
        <Route path='/Sorvetes' element={<SorvetesPage />} />
      </Route>
    </Routes>
  )
}
