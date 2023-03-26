import { type, type IsNotUndefined } from '../index.js'

it('returns false for undefined', () => {
	type.false<IsNotUndefined<undefined>>(true)
})

it('returns true for other special types', () => {
	type.true<IsNotUndefined<any>>(true)
	type.true<IsNotUndefined<unknown>>(true)
	type.true<IsNotUndefined<void>>(true)
	type.true<IsNotUndefined<never>>(true)
})

test('returns true for singular types', () => {
	type.true<IsNotUndefined<null>>(true)
	type.true<IsNotUndefined<number>>(true)
	type.true<IsNotUndefined<boolean>>(true)
	type.true<IsNotUndefined<true>>(true)
	type.true<IsNotUndefined<false>>(true)
	type.true<IsNotUndefined<string>>(true)
	type.true<IsNotUndefined<''>>(true)
	type.true<IsNotUndefined<symbol>>(true)
	type.true<IsNotUndefined<bigint>>(true)
	type.true<IsNotUndefined<{}>>(true)
	type.true<IsNotUndefined<string[]>>(true)
	type.true<IsNotUndefined<[]>>(true)
	type.true<IsNotUndefined<Function>>(true)
	type.true<IsNotUndefined<() => void>>(true)
})

it('returns true for union type', () => {
	type.true<IsNotUndefined<undefined | 1>>(true)
})

it('returns true as undefined & any => any', () => {
	type.true<IsNotUndefined<undefined & any>>(true)
})

it('returns false as undefined & unknown => undefined', () => {
	type.false<IsNotUndefined<undefined & unknown>>(true)
})

it('returns false as undefined & void => undefined', () => {
	type.false<IsNotUndefined<undefined & void>>(true)
})

it('returns true as undefined & never => never', () => {
	type.true<IsNotUndefined<undefined & never>>(true)
})

it('returns true as undefined & <others> => never', () => {
	type.true<IsNotUndefined<undefined & null>>(true)
	type.true<IsNotUndefined<undefined & number>>(true)
	type.true<IsNotUndefined<undefined & 1>>(true)
	type.true<IsNotUndefined<undefined & boolean>>(true)
	type.true<IsNotUndefined<undefined & true>>(true)
	type.true<IsNotUndefined<undefined & false>>(true)
	type.true<IsNotUndefined<undefined & string>>(true)
	type.true<IsNotUndefined<undefined & ''>>(true)
	type.true<IsNotUndefined<undefined & symbol>>(true)
	type.true<IsNotUndefined<undefined & bigint>>(true)
	type.true<IsNotUndefined<undefined & 1n>>(true)
	type.true<IsNotUndefined<undefined & {}>>(true)
	type.true<IsNotUndefined<undefined & { a: 1 }>>(true)
	type.true<IsNotUndefined<undefined & string[]>>(true)
	type.true<IsNotUndefined<undefined & []>>(true)
	type.true<IsNotUndefined<undefined & Function>>(true)
	type.true<IsNotUndefined<undefined & (() => void)>>(true)
})

it('can override Then/Else', () => {
	type.equal<IsNotUndefined<undefined, 1, 2>, 2>(true)

	type.equal<IsNotUndefined<any, 1, 2>, 1>(true)
	type.equal<IsNotUndefined<unknown, 1, 2>, 1>(true)
	type.equal<IsNotUndefined<never, 1, 2>, 1>(true)
	type.equal<IsNotUndefined<void, 1, 2>, 1>(true)
})
