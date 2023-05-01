import { IEntity } from './types/IEntity'

export class Character implements IEntity {
  x: number = 0
  y: number = 0
  texture: string = ''
  name: string = ''
  speed: number = 10
  constructor({ name }: { name: string }) {
    this.name = name
  }
}
