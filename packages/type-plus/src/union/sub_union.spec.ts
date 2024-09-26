import { it } from '@jest/globals'
import type { SubUnion } from '../index.js'
import { testType } from '../testing/test_type.js'

type Fruit = 'apple' | 'banana' | 'orange' | 'grape' | 'kiwi'| 'mango'| 'pineapple' | 'strawberry' | 'watermelon' | 'melon' | 'peach' | 'pear' | 'cherry' | 'plum' | 'apricot' | 'nectarine' | 'tangerine' | 'lemon' | 'lime' | 'grapefruit' | 'mandarin' | 'clementine' | 'cranberry' | 'blueberry' | 'raspberry' | 'blackberry' | 'strawberry' | 'blackcurrant' | 'gooseberry' | 'kiwifruit' | 'passionfruit' | 'papaya' | 'guava' | 'avocado' | 'mangosteen' | 'dragonfruit' | 'lychee' | 'loquat' | 'persimmon' | 'fig' | 'date' | 'pomegranate' | 'mulberry' | 'boysenberry' | 'elderberry' | 'blackcurrant' | 'gooseberry' | 'kiwifruit' | 'passionfruit' | 'papaya' | 'guava' | 'avocado' | 'mangosteen' | 'dragonfruit'

it('defines a type that is a subset of the superset union type', () => {
	type R = SubUnion<Fruit, 'apple'>
	testType.equal<R, 'apple'>(true)
})

it('does not allow to define a type that is not a subset of the superset union type', () => {
	// @ts-expect-error
	type R = SubUnion<Fruit, 'carrot'>
})