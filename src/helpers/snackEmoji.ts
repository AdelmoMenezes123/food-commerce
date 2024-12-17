export function SnackEmoji(snack: string) {
  switch (snack.toLowerCase()) {
    case 'burger':
      return '🍔'
    case 'pizza':
      return '🍕'
    case 'drink':
      return '🍹'
    case 'ice-cream':
      return '🍨'
    case 'ice-creams':
      return '🍨'
    default:
      return '👦🔍'
  }
}
