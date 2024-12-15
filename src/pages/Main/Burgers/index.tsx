import { Head } from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { useSnack } from '../../../hooks/useSnacks'
export default function Burgers() {
  const { burgers } = useSnack()

  return (
    <>
      <Head title='Burgers' description='Nossos melhores burgers' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
