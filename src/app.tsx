import './app.css'

// Observe-design-pattern
import { initObserver } from './patterns/observe/init'
import { IEntity } from './patterns/observe/types'

// Events
import { emitMoveUp, emitMoveDown, emitMoveLeft, emitMoveRight } from './patterns/observe/events/emit'
import { useState } from 'preact/hooks'
import { MOVEMENT } from './patterns/observe/MovementObserver'

const { charactersMap } = initObserver()

export function App() {
  const [char, setChar] = useState(charactersMap.get(charactersMap.keys().next().value))

  const handleMove = (event: string) => {
    const actions = new Map<string, (entity: IEntity) => void>([
      [MOVEMENT.MOVE_UP, (entity: IEntity) => emitMoveUp(entity)],
      [MOVEMENT.MOVE_DOWN, (entity: IEntity) => emitMoveDown(entity)],
      [MOVEMENT.MOVE_LEFT, (entity: IEntity) => emitMoveLeft(entity)],
      [MOVEMENT.MOVE_RIGHT, (entity: IEntity) => emitMoveRight(entity)]
    ])
    const action = actions.get(event)
    if (action) action(char)
    setChar({ ...char })
  }

  return (
    <>
      <h1>{char.name}</h1>
      <div>
        <span> x: {char.x}</span>
        <span> y: {char.y}</span>
      </div>
      <div class='card'>
        <button onClick={() => handleMove(MOVEMENT.MOVE_UP)}>UP</button>
        <button onClick={() => handleMove(MOVEMENT.MOVE_DOWN)}>DOWN</button>
        <button onClick={() => handleMove(MOVEMENT.MOVE_LEFT)}>LEFT</button>
        <button onClick={() => handleMove(MOVEMENT.MOVE_RIGHT)}>RIGHT</button>
      </div>
    </>
  )
}
