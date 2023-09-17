import type { IsNever } from './is_never.js'
import type { $Never } from './never.js'

/**
 * Check if `T` is not `never`.
 * If it is not, returns `Is_Never`.
 *
 * ```ts
 * type R = NotNeverType<1> // 1
 *
 * type R = NotNeverType<never> // 'is_never'
 * ```
 */

export type NotNeverType<T, Then = T, Else = $Never> = IsNever<T, Else, Then>
