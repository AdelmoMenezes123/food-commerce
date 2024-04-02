import { ReactNode } from 'react'
import { Title } from './styles'

interface TitleProps {
  children: ReactNode
}

export default function SnackTitle({ children }: TitleProps) {
  return <Title>{children}</Title>
}
