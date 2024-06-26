import { FiPlus } from 'react-icons/fi'

import { currencyFormat } from '../../helpers/currencyFormat'
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
      {!snacks.length ? (
        <p style={{ textAlign: 'center', color: '#fff' }}>Loading</p>
      ) : (
        snacks.map((snack) => (
          <div key={snack.id} className='snack'>
            <h2>{snack.name}</h2>
            <img src={snack.image} alt={snack.name} />
            <p>{snack.description}</p>
            <div>
              <strong>{currencyFormat(snack.price)}</strong>
              <button type='button'>
                <FiPlus />
              </button>
            </div>
          </div>
        ))
      )}
    </Container>
  )
}
