import { IMovementObserver } from './types'

export class Subject {
  observersList: IMovementObserver[]
  constructor() {
    this.observersList = []
  }

  public emit(event: string, payload: Record<string, unknown> = {}) {
    this.observersList.forEach((observer) => {
      observer?.onNotify(event, payload)
    })
  }

  public addObserver(observer: IMovementObserver) {
    this.observersList.push(observer)
    console.log('addObserver', this.observersList)
  }

  public removeObserver(observer: IMovementObserver) {
    this.observersList = this.observersList.filter((item) => item !== observer)
    console.log('removeObserver', this.observersList)
  }
}
