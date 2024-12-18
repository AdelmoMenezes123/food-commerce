import { createContext, ReactNode, useState } from 'react'
import { toast } from 'react-toastify'
import { SnackEmoji } from '../helpers/snackEmoji'
import { SnackData } from '../interfaces/SnackData'

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

interface RemoveSnackFromCart {
  id: number
  snack: SnackData
}

interface UpdateCartProps {
  id: number
  snack: SnackData
  newQuantity: number
}

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: (id: number, snack: Snack) => void
  snackCartIncrement: (id: number, snack: Snack) => void
  snackCartDecrement: (id: number, snack: Snack) => void
  confirmOrder: () => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Snack[]>([])

  function addSnackIntoCart(snack: SnackData): void {
    // buscar
    const snackExistsInCart = cart.find(
      (item) => item.snack === snack.snack && item.id === snack.id,
    )

    // atualizar
    if (snackExistsInCart) {
      const newCart = cart.map((item) => {
        if (item.id === snack.id) {
          const quantity = item.quantity + 1
          const subtotal = item.price * quantity

          return { ...item, quantity, subtotal }
        }
        return item
      })

      toast.success(`Outro(a) ${SnackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos!`)
      setCart(newCart)
      return
    }

    // criar
    const newSnack = {
      ...snack,
      quantity: 1,
      subtotal: snack.price,
    }
    const newCart = [...cart, newSnack]
    toast.success(`${SnackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos!`)
    setCart(newCart)
  }

  function updateSnackQuantity(id: number, snack: Snack, newQuantity: number): void {
    //
  }

  function removeSnackFromCart(id: number, snack: Snack): void {
    //
  }
  function snackCartIncrement(id: number, snack: Snack): void {
    updateSnackQuantity(id, snack, snack.quantity + 1)
  }
  function snackCartDecrement(id: number, snack: Snack): void {
    updateSnackQuantity(id, snack, snack.quantity - 1)
  }
  function confirmOrder(): void {
    //
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addSnackIntoCart,
        removeSnackFromCart,
        snackCartIncrement,
        snackCartDecrement,
        confirmOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
