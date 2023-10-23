import { test } from '@jest/globals'

import { testType } from '../index.js'

test('union behavior of undefined', () => {
	testType.equal<undefined | null, undefined | null>(true)
	testType.equal<undefined | boolean, undefined | boolean>(true)
	testType.equal<undefined | true, undefined | true>(true)
	testType.equal<undefined | false, undefined | false>(true)
	testType.equal<undefined | number, undefined | number>(true)
	testType.equal<undefined | 1, undefined | 1>(true)
	testType.equal<undefined | string, undefined | string>(true)
	testType.equal<undefined | '', undefined | ''>(true)
	testType.equal<undefined | symbol, undefined | symbol>(true)
	testType.equal<undefined | bigint, undefined | bigint>(true)
	testType.equal<undefined | 1n, undefined | 1n>(true)
	testType.equal<undefined | {}, undefined | {}>(true)
	testType.equal<undefined | { a: 1 }, undefined | { a: 1 }>(true)
	testType.equal<undefined | string[], undefined | string[]>(true)
	testType.equal<undefined | [], undefined | []>(true)
	testType.equal<undefined | Function, undefined | Function>(true)
	testType.equal<undefined | (() => void), undefined | (() => void)>(true)

	testType.equal<undefined | any, any>(true)
	testType.equal<undefined | unknown, unknown>(true)
	testType.equal<undefined | never, undefined>(true)
	testType.equal<undefined | void, void>(true)
})

test('intersection behavior of undefined', () => {
	testType.equal<undefined & null, never>(true)
	testType.equal<undefined & boolean, never>(true)
	testType.equal<undefined & true, never>(true)
	testType.equal<undefined & false, never>(true)
	testType.equal<undefined & number, never>(true)
	testType.equal<undefined & 1, never>(true)
	testType.equal<undefined & string, never>(true)
	testType.equal<undefined & '', never>(true)
	testType.equal<undefined & symbol, never>(true)
	testType.equal<undefined & bigint, never>(true)
	testType.equal<undefined & 1n, never>(true)
	testType.equal<undefined & {}, never>(true)
	testType.equal<undefined & { a: 1 }, never>(true)
	testType.equal<undefined & string[], never>(true)
	testType.equal<undefined & [], never>(true)
	testType.equal<undefined & Function, never>(true)
	testType.equal<undefined & (() => void), never>(true)

	testType.equal<undefined & any, any>(true)
	testType.equal<undefined & unknown, undefined>(true)
	testType.equal<undefined & never, never>(true)
	testType.equal<undefined & void, undefined>(true)
})
