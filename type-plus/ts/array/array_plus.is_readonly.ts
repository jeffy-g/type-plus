import type { NeverType } from '../never/never_type.js'
import type { TypePlusOptions } from '../utils/options.js'
import type { LooseArrayType } from './loose_array_type.js'

/**
 * 🎭 *validate*
 * 🔢 *customizable*
 *
 * Checks if `A` is a readonly array or tuple
 *
 * @example
 * ```ts
 * type R = IsReadonly<readonly string[]> // true
 * type R = IsReadonly<readonly [1, 2, 3, 4, 5]> // true
 *
 * type R = IsReadonly<[1, 2, 3, 4, 5]> // false
 * type R = IsReadonly<readonly string[] | number> // boolean
 * ```
 */
export type IsReadonly<
	A,
	Options extends IsReadonly.Options = IsReadonly.DefaultOptions
> =
	TypePlusOptions.Merge<Options, IsReadonly.DefaultOptions> extends infer O extends IsReadonly.Options ?
	NeverType<
		A,
		O['$never'],
		A extends any ?
		LooseArrayType<A,
			Readonly<A> extends A ? O['$then'] : O['$else'],
			O['$notArray']
		> : never
	>
	: never

export namespace IsReadonly {
	export interface Options extends NeverType.Options, TypePlusOptions.Selection {
		$notArray?: unknown
	}

	export interface DefaultOptions {
		$then: true,
		$else: false,
		$never: false,
		$notArray: false
	}
}
