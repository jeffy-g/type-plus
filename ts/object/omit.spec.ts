import { assertType, Equal, Except, Omit, omit } from '..'

describe('Omit', () => {
  test('work with primitive types', () => {
    type N = Omit<number, 'toFixed'>
    assertType.isFunction((() => ({})) as N['toExponential'])
  })

  test('Remove properties', () => {
    type Foo = {
      a: number,
      b: string,
      c: boolean,
    }

    type Actual = Omit<Foo, 'c'>
    const a: Actual = { a: 0, b: '' }
    assertType.isNumber(a.a)
    assertType.isString(a.b)

    type Revert = Omit<Foo, keyof Actual>
    const r: Revert = { c: false }
    assertType.isBoolean(r.c)
  })

  test('distributive omit', () => {
    type Action = InvokeAction | ReturnAction

    type InvokeAction = {
      type: 'invoke',
      id: string,
      payload: string[],
    }

    type ReturnAction = {
      type: 'return',
      id: string,
      payload: string,
    }

    const x: Omit<Action, 'id'> = { type: 'return', payload: '' }

    const actions: Action[] = []

    actions.push({ ...x, id: '1' })
  })

  test('distributive Omit with disjoined keys', () => {
    type Union = {
      type: 'A',
      foo: string,
    } | {
      type: 'B',
      foo: string,
      bar: string,
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    type Id<T> = {} & { [P in keyof T]: T[P] }
    let x: Id<Omit<Union, 'bar'>> = { type: 'A', foo: 'foo' }
    x = { type: 'B', foo: 'bar' }
    expect(x.foo).toBe('bar')
  })

  test('intersection types with generic', () => {
    type Foo = { a: string, b: string }
    function foo<T>(input: Omit<Foo & T, 'a'>): void {
      assertType.isString(input.b)
    }
    foo({ b: '1' })
  })

  test('omit properties from object', () => {
    const actual = omit({ a: 1, b: 2 }, 'a')

    expect(actual).toEqual({ b: 2 })
  })

  test('omit all', () => {
    const actual = omit({ a: 1 }, 'a')

    expect(actual).toEqual({})
    assertType.isTrue(true as Equal<keyof typeof actual, never>)
  })
})

describe('Except()', () => {
  test('Remove properties', () => {
    type Foo = {
      a: number,
      b: string,
      c: boolean,
    }

    type Actual = Except<Foo, 'c'>
    const a: Actual = { a: 0, b: '' }
    assertType.isNumber(a.a)
    assertType.isString(a.b)

    // tslint:disable-next-line: deprecation
    type Revert = Except<Foo, keyof Actual>
    const r: Revert = { c: false }
    assertType.isBoolean(r.c)
  })
})
