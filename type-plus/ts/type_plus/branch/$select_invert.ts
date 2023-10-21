import type { $ResolveOptions } from '../$resolve_options.js'
import type { $Any } from '../../any/any.js'
import type { IsNever } from '../../never/is_never.js'
import type { $Never } from '../../never/never.js'
import type { $Unknown } from '../../unknown/unknown.js'
import type { $DistributiveDefault, $DistributiveOptions } from './$distributive.js'
import type { $InputOptions } from './$input_options.js'
import type { $ResolveBranch } from './$resolve_branch.js'
import type { $SelectionOptions } from './$selection_options.js'
import type { $Else, $SelectionBranch, $SelectionPredicate, $Then } from './$selection.js'

/**
 * 🎭 *predicate*
 * ㊙️ *internal*
 *
 * Validate if `T` is `U`.
 *
 * @example
 * ```ts
 * type R = $SelectInvert<undefined, undefined> // true
 *
 * type R = $SelectInvert<never, undefined> // false
 * type R = $SelectInvert<unknown, undefined> // false
 * type R = $SelectInvert<string | boolean, undefined> // false
 *
 * type R = $SelectInvert<string | undefined, undefined> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is `U`, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = $SelectInvert<undefined, undefined, { selection: 'filter' }> // undefined
 *
 * type R = $SelectInvert<never, undefined, { selection: 'filter' }> // never
 * type R = $SelectInvert<unknown, undefined, { selection: 'filter' }> // never
 * type R = $SelectInvert<string | boolean, undefined, { selection: 'filter' }> // never
 *
 * type R = $SelectInvert<string | undefined, undefined> // undefined
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = $SelectInvert<undefined | 1, undefined> // boolean
 * type R = $SelectInvert<undefined | 1, undefined, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = $SelectInvert<undefined, undefined, $SelectionBranch> // $Then
 * type R = $SelectInvert<string, undefined, $SelectionBranch> // $Else
 * ```
 */
export type $SelectInvert<
	T,
	U,
	$O extends $SelectInvert.$Options = {}
> = IsNever<
	T,
	{
		$any: $ResolveBranch<T, $O, [$Any, $Then]>,
		$unknown: $ResolveBranch<T, $O, [$Unknown, $Then]>,
		$then: $ResolveBranch<T, $O, [$Never, $Then]>,
		$else: $ResolveOptions<[$O['distributive'], $SelectInvert.$Default['distributive']]> extends true
		? T extends U ? $ResolveBranch<T, $O, [$Else]> : $ResolveBranch<T, $O, [$Then]>
		: $SelectInvert._N<T, U, $O>
	}
>

export namespace $SelectInvert {
	export type $Options = $SelectionOptions & $DistributiveOptions & $InputOptions<$Any | $Unknown | $Never>
	export type $Default = $SelectionPredicate & $DistributiveDefault
	export type $Branch = $SelectionBranch & $DistributiveDefault
	export type _N<T, U, $O extends $SelectInvert.$Options> =
		[T] extends [U] ? $ResolveBranch<T, $O, [$Else]> : $ResolveBranch<T, $O, [$Then]>

}
