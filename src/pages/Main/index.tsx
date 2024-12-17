import { Sidebar } from '../../components/Sidebar'
import { Container } from './styles'

import { Outlet } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { MyOrder } from '../../components/MyOrder'

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} alt='Imagem Logo' />
        <Outlet />
      </section>
      <MyOrder />
    </Container>
  )
}
