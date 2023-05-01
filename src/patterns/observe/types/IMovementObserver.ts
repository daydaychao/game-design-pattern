import { IEntity } from '.'

export type IMovementObserver = {
  onNotify(event: string, payload: Record<string, unknown>): void
  moveUp(entity: IEntity): void
  moveDown(entity: IEntity): void
  moveLeft(entity: IEntity): void
  moveRight(entity: IEntity): void
}
