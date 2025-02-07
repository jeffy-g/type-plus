import type { $ResolveBranch } from '../$type/branch/$resolve_branch.js'
import type { $Else, $Then } from '../$type/branch/$selection.js'
import type { IsBigint } from '../bigint/is_bigint.js'
import type { $Equal } from '../equal/equal.js'
import type { IsNumber } from '../number/is_number.js'

/**
 * Is `T` not a positive numeric type.
 *
 * ```ts
 * type R = IsNotPositive<-1> // true
 * type R = IsNotPositive<-1n> // true
 *
 * type R = IsNotPositive<0> // false
 * type R = IsNotPositive<1> // false
 *
 * type R = IsNotPositive<number> // boolean
 * type R = IsNotPositive<bigint> // boolean
 * type R = IsNotPositive<any> // boolean
 *
 * ```
 */
export type IsNotPositive<T, $O extends IsNotPositive.$Options = {}> = IsBigint<
	T,
	{
		distributive: $O['distributive']
		$then: $Then
		$else: $Else
	}
> extends infer R
	? R extends $Then
		? IsNotPositive._Negative<T, bigint, $O>
		: IsNumber<Exclude<T, bigint>, { distributive: $O['distributive']; $then: $Then; $else: $Else }> extends infer R
			? R extends $Then
				? IsNotPositive._Negative<T, number, $O>
				: $ResolveBranch<Exclude<T, number | bigint>, $O, [$Then]>
			: never
	: never

export namespace IsNotPositive {
	export type $Options = $Equal.$Options
	export type $Branch<$O extends $Options = {}> = $Equal.$Branch<$O>
	export type _Negative<T, U extends number | bigint, $O extends IsNotPositive.$Options> = T extends U
		? `${T}` extends `-${string}`
			? $ResolveBranch<T, $O, [$Then]>
			: U extends T
				? $ResolveBranch<T, $O, [$Then]> | $ResolveBranch<T, $O, [$Else]>
				: $ResolveBranch<T, $O, [$Else]>
		: never
}
