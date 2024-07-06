import { useEffect, useState } from 'react'
import { Head } from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { SnackData } from '../../../interfaces/SnackData'
import { getBurgers } from '../../../services/api'

export default function Burgers() {
  const [burgers, setBurgers] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      const burgerRequest = await getBurgers()

      setBurgers(burgerRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Burgers' description='Nossos melhores burgers' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
