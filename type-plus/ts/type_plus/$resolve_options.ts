import type { $InferError } from './$infer_error.js'

/**
 * 🧰 *type util*
 *
 * Resolve options to the first non `unknown` value.
 *
 * The `Values` are assumed to be a tuple with at least one value.
 * These checks are not performed for performance considerations.
 */
export type $ResolveOptions<Values extends unknown[]> =
	$ResolveOptions._<Values, never>
// 0 extends 1 & Values
// ? $Error<'Values cannot be `any`.', Values>
// : ([Values, never] extends [never, Values]
// 	? $Error<'Values cannot be `never`.', Values>
// 	: (Values extends []
// 		? $Error<'Values cannot be `[]`.', Values>
// 		: $ResolveOptions._<Values, never>))

export namespace $ResolveOptions {
	export type _<V extends unknown[], R> = V extends [infer T]
		? T
		: (V extends [infer T, ...infer U]
			? ([T, unknown] extends [unknown, T] ? _<U, R> : T)
			: $InferError<'cannot [infer T, ...infer U] from', V>)
}
