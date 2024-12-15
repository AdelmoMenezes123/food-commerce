import { Head } from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { useSnack } from '../../../hooks/useSnacks'

export default function IceCreams() {
  const { iceCreams } = useSnack()

  return (
    <>
      <Head title='IceCreams' description='Nossos melhores Ice - Cream' />
      <SnackTitle>Ice - Creams</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}
