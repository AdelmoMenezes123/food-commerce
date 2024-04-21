import { Head } from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function IceCreams() {
  const data = [
    {
      id: 1,
      snack: 'ice-cream',
      name: 'Açai 500ML',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, ducimus quas.',
      price: 7.5,
      image: 'https://imgur.com/Ep7BZzY.png',
    },
    {
      id: 2,
      snack: 'ice-cream',
      name: 'Casquinha',
      description: 'Acasquinha crocante e saborosa que nossos clientes adoram',
      price: 3.5,
      image: 'https://imgur.com/YGmeoCm.jpg',
    },
    {
      id: 3,
      snack: 'ice-cream',
      name: 'Chocolate com granulado',
      description: 'Sorvete com granulado em chocolate para vocé se deliciar',
      price: 6,
      image: 'https://i.imgur.com/osAHOLe.jpg',
    },
  ]
  return (
    <>
      <Head title='IceCreams' description='Nossos melhores Ice - Cream' />
      <SnackTitle>Ice - Creams</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
