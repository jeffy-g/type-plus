import type { $InputOptions } from '../$type/branch/$input_options.js'
import type { $ResolveBranch } from '../$type/branch/$resolve_branch.js'
import type { $Else, $SelectionBranch, $Then } from '../$type/branch/$selection.js'
import type { $SelectionOptions } from '../$type/branch/$selection_options.js'
import type { $Never } from '../$type/special/$never.js'
import type { $Special } from '../$type/special/$special.js'
import type { $Unknown } from '../$type/special/$unknown.js'
import type { $Void } from '../$type/special/$void.js'

/**
 * 🎭 *predicate*
 *
 * Validate if `T` is `any`.
 *
 * @example
 * ```ts
 * type R = IsAny<any> // true
 *
 * type R = IsAny<never> // false
 * type R = IsAny<unknown> // false
 * type R = IsAny<string | boolean> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is `any`.
 *
 * @example
 * ```ts
 * type R = IsAny<any, { selection: 'filter' }> // any
 *
 * type R = IsAny<never, { selection: 'filter' }> // never
 * type R = IsAny<unknown, { selection: 'filter' }> // never
 * type R = IsAny<string | boolean, { selection: 'filter' }> // never
 * ```
 *
 * 🔱 *branching*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsAny<any, $SelectionBranch> // $Then
 * type R = IsAny<string, $SelectionBranch> // $Else
 * type R = IsAny<unknown, $Unknown.$Branch> // $Unknown
 * type R = IsAny<string, $Never.$Branch> // $Never
 * ```
 */
export type IsAny<T, $O extends IsAny.$Options = {}> = $Special<
	T,
	{
		$any: $ResolveBranch<T, $O, [$Then]>
		$unknown: $ResolveBranch<T, $O, [$Unknown, $Else]>
		$never: $ResolveBranch<T, $O, [$Never, $Else]>
		$void: $ResolveBranch<T, $O, [$Void, $Else]>
		$else: $ResolveBranch<T, $O, [$Else]>
	}
>

export namespace IsAny {
	export type $Options = $SelectionOptions & $InputOptions<$Unknown | $Never | $Void>
	export type $Branch = $SelectionBranch & $Unknown.$Branch & $Never.$Branch
}
