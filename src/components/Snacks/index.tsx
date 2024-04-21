import { Container } from './styles'
interface SnacksProps {
  snacks: {
    id: number
    snack: string
    name: string
    description: string
    price: number
    image: string
  }[]
}

export function Snacks({ snacks }: SnacksProps) {
  return (
    <Container>
      {snacks.map((snack) => (
        <div key={snack.id}>
          <h2>{snack.name}</h2>
          <img src={snack.image} alt={snack.name} />
          <p>{snack.description}</p>
          <div>
            <strong>{snack.price}</strong>
            <button type='button'>Comprar</button>
          </div>
        </div>
      ))}
    </Container>
  )
}
