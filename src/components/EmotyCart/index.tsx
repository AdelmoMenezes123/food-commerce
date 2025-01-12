import manAndBurgerImg from '../../assets/man-and-burger.svg'
import { Button, Container } from './styles'

interface EmptyCartProps {
  title: string
}
export function EmptyCart({ title }: EmptyCartProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <Button to='/'>Checar o cardápio</Button>
      <img src={manAndBurgerImg} alt='homem com Hambúrguer' />
    </Container>
  )
}
