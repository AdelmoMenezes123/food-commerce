import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'
import { useCart } from '../../hooks/useCart'
import { Container } from './styles'
export function OrderHeader() {
  const { cart } = useCart()

  return (
    <Container>
      <Link to='/'>
        <img src={logoImg} alt='carrinho' />
      </Link>

      <div>
        <div>
          <h3>Meus Pedidos</h3>
          <span>
            <strong>{`${cart.length}`.padStart(2, '0')} lanches</strong>
          </span>
        </div>

        <CartIcon />
      </div>
    </Container>
  )
}
