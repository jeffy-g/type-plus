import { isConstructor } from '../class'

export function isType<T>(subject: T): subject is T
export function isType<T>(subject: unknown, validator: (s: T) => boolean): subject is T
export function isType<T extends new (...args: any) => any>(subject: unknown, constructor: T): subject is InstanceType<T>
export function isType(subject: any, validator?: any) {
  if (validator) {
    if (isConstructor(validator))
      return subject instanceof validator
    else
      return validator(subject)
  }
  return true
}

const sym = Symbol()

isType.true = function <T extends true>(subject: T = sym as any) {
  return (subject as any) === sym || subject === true
}
isType.false = function <T extends false>(subject: T = sym as any) {
  return (subject as any) === sym || subject === false
}
