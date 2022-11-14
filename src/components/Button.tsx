import { ButtonContainer } from './Button.styles'

interface ButtonProps {
    color?: 'primary' | 'secondary' | 'danger' | 'sucess'
}

export function Button({ color = 'primary' }: ButtonProps) {
    return <ButtonContainer> Enviar</ButtonContainer >
}