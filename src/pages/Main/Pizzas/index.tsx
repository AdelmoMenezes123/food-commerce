import { Head } from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Pizzas() {
  const data = [
    {
      id: 1,
      snack: 'pizza',
      name: 'Calabresa',
      description: 'Pizza recheada coom calabresa e cebola tendo uma borda recheada com catupiry',
      price: 25.5,
      image: 'https://imgur.com/5rjJGkV.png',
    },
    {
      id: 2,
      snack: 'pizza',
      name: 'Portuguesa',
      description:
        'pizza recheada com presunto, mussarela, ovo, cebola e azeitona tendendo uma borda recheada com catupiry',
      price: 28.59,
      image: 'https://imgur.com/WCoyGoI.jpg',
    },
  ]
  return (
    <>
      <Head title='Pizzas' description='Nossas melhores pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
