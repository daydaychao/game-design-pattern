import { Subject } from './Subject'
import { IEntity, IMovementObserver } from './types'

export enum MOVEMENT {
  MOVE_UP = 'MOVE_UP',
  MOVE_DOWN = 'MOVE_DOWN',
  MOVE_LEFT = 'MOVE_LEFT',
  MOVE_RIGHT = 'MOVE_RIGHT'
}

export class MovementObserver implements IMovementObserver {
  constructor(subject: Subject) {
    subject.addObserver(this)
  }

  public onNotify(event: string, { entity }: IEntity): void {
    const actions = new Map<string, (entity: IEntity) => void>([
      [MOVEMENT.MOVE_UP, (entity: IEntity) => this.moveUp(entity)],
      [MOVEMENT.MOVE_DOWN, (entity: IEntity) => this.moveDown(entity)],
      [MOVEMENT.MOVE_LEFT, (entity: IEntity) => this.moveLeft(entity)],
      [MOVEMENT.MOVE_RIGHT, (entity: IEntity) => this.moveRight(entity)]
    ])

    const action = actions.get(event)
    if (action) action(entity)
    this.getInfo(entity)
  }

  moveUp(entity: IEntity) {
    entity.y += entity.speed
  }
  moveDown(entity: IEntity) {
    entity.y -= entity.speed
  }
  moveLeft(entity: IEntity) {
    entity.x -= entity.speed
  }
  moveRight(entity: IEntity) {
    entity.x += entity.speed
  }

  getInfo(entity: IEntity) {
    console.log('after moved:', { entity: entity.name, x: entity.x, y: entity.y })
  }
}
