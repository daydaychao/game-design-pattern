import { Subject } from './Subject'
import { Character } from './Character'
import { MovementObserver } from './MovementObserver'

export let subject: Subject // global Subject

export function initObserver() {
  subject = new Subject()
  new MovementObserver(subject) // Observer

  // Instantiate Character
  const GoGu = new Character({ name: '悟空' })
  const GoHan = new Character({ name: '叮噹' })
  const Doraemon = new Character({ name: '亂馬' })
  const Enemy = new Character({ name: '機器人' })

  // Make a Characters Map
  const charactersMap = new Map()
  charactersMap.set(GoGu.name, GoGu)
  charactersMap.set(GoHan.name, GoHan)
  charactersMap.set(Doraemon.name, Doraemon)
  charactersMap.set(Enemy.name, Enemy)

  console.log({ GoGu, GoHan, Doraemon, Enemy })

  // return subject and charactersMap
  return { subject, charactersMap }
}
