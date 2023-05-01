import { subject } from '../init'
import { Character } from '../Character'

export const emitMoveUp = (entity: Character) => subject.emit('MOVE_UP', { entity })
export const emitMoveDown = (entity: Character) => subject.emit('MOVE_DOWN', { entity })
export const emitMoveLeft = (entity: Character) => subject.emit('MOVE_LEFT', { entity })
export const emitMoveRight = (entity: Character) => subject.emit('MOVE_RIGHT', { entity })
