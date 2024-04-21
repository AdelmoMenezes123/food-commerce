import { Head } from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'

export default function Burgers() {
  const data = [
    {
      id: 1,
      snack: 'burger',
      name: 'Mega',
      description: 'Um hambúrguer com duas carnes bovinas, tamanho familia e bastante macio.',
      price: 19.99,
      image: 'https://i.imgur.com/upjIUnG.jpg',
    },
    {
      id: 2,
      snack: 'burger',
      name: 'Extra Bacon',
      description: 'Um hamburguer com duas camadas de Bacon bem assada ainda com queijo e tomate.',
      price: 14.99,
      image: 'https://i.imgur.com/B4J04AJ.jpg',
    },
  ]

  return (
    <>
      <Head title='Burgers' description='Nossos melhores burgers' />
      <SnackTitle>Hambúrgueres</SnackTitle>
    </>
  )
}
