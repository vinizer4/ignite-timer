import { Play } from 'phosphor-react'
import {
  CountdownContainier,
  FormContainier,
  HomeContainer,
  Separator,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainier>
          <label htmlFor="task">Vou trabalahr em</label>
          <input type="text" name="" id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" name="" id="minutesAmount" />

          <span>Minutos.</span>
        </FormContainier>

        <CountdownContainier>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainier>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}
