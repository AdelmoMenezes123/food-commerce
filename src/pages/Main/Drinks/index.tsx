import { Head } from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Drinks() {
  const data = [
    {
      id: 1,
      snack: 'drink',
      name: 'Coca-Cola 2L',
      description: 'Atradicional coca-cola que a familia adora',
      price: 8.5,
      image: 'https://i.imgur.com/Lg3aKhf.jpg',
    },
    {
      id: 2,
      snack: 'drink',
      name: 'Guaraná Antartica',
      description: 'O irresistível guaraná antartica',
      price: 6.5,
      image: 'https://i.imgur.com/hOBrOIm.jpg',
    },
    {
      id: 3,
      snack: 'drink',
      name: 'Suco de abacaxi',
      description: 'Um delicioso suco de abacaxi',
      price: 8,
      image: 'https://i.imgur.com/VV9qTMh.jpg',
    },
  ]
  return (
    <>
      <Head title='Drinks' description='Nossos melhores drinks' />
      <SnackTitle>Drinks</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
