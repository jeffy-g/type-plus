import { type NotBooleanType, type PrimitiveTypes, type } from '../index.js'

it('returns never it T is toolean', () => {
	type.never<NotBooleanType<boolean>>(true)
})

it('returns T it T is true or false literal', () => {
	type.equal<NotBooleanType<true>, true>(true)
	type.equal<NotBooleanType<false>, false>(true)
})

it('returns T for special types', () => {
	type.equal<NotBooleanType<void>, void>(true)
	type.equal<NotBooleanType<unknown>, unknown>(true)
	type.equal<NotBooleanType<any>, any>(true)
	type.equal<NotBooleanType<never>, never>(true)
})

it('returns T for all other types', () => {
	type.equal<NotBooleanType<undefined>, undefined>(true)
	type.equal<NotBooleanType<null>, null>(true)
	type.equal<NotBooleanType<number>, number>(true)
	type.equal<NotBooleanType<true>, true>(true)
	type.equal<NotBooleanType<false>, false>(true)
	type.equal<NotBooleanType<string>, string>(true)
	type.equal<NotBooleanType<''>, ''>(true)
	type.equal<NotBooleanType<symbol>, symbol>(true)
	type.equal<NotBooleanType<bigint>, bigint>(true)
	type.equal<NotBooleanType<{}>, {}>(true)
	type.equal<NotBooleanType<string[]>, string[]>(true)
	type.equal<NotBooleanType<[]>, []>(true)
	type.equal<NotBooleanType<Function>, Function>(true)
	type.equal<NotBooleanType<() => void>, () => void>(true)
})

it('returns T for union type', () => {
	type.equal<NotBooleanType<PrimitiveTypes>, PrimitiveTypes>(true)
})

it('can override Then/Else', () => {
	type.equal<NotBooleanType<boolean, 1, 2>, 2>(true)
	type.equal<NotBooleanType<true, 1, 2>, 1>(true)
	type.equal<NotBooleanType<false, 1, 2>, 1>(true)

	type.equal<NotBooleanType<any, 1, 2>, 1>(true)
	type.equal<NotBooleanType<unknown, 1, 2>, 1>(true)
	type.equal<NotBooleanType<never, 1, 2>, 1>(true)
	type.equal<NotBooleanType<void, 1, 2>, 1>(true)
})
