import {calculateRentalCost,
    openOrSenior,
    isPrime,
    reverseWords,
    moveZeros,
    createUrl,
	invertColor,
	transformState} from './task.js';
describe('calculateRentalCost function', () => {
    test('should return value correctly', () => {
        expect(calculateRentalCost(2)).toBe(80);
        expect(calculateRentalCost(3)).toBe(100);
    })
})
describe('openOrSenior', () => {
    test('should return value correctly', () => {
        expect(openOrSenior([[40, 15],[40, 5],[40, 20], [41, 15], [41, 5], [41, 16], [5, 15], [5, 5], [5,20]]))
        .toStrictEqual(['Open', 'Open', 'Senior', 'Open', 'Open', 'Senior', 'Open', 'Open', 'Open']);
    })
})
describe('isPrime', () => {
    test('should return value correctly', () => {
        expect(isPrime(2)).toBe(true);
        expect(isPrime(73)).toBe(true);
        expect(isPrime(1)).toBe(false);
        expect(isPrime(75)).toBe(false);
        expect(isPrime(-1)).toBe(false);
    })
})
describe('moveZeros', () => {
    test('should return value correctly', () => {
        expect(moveZeros(['test', 0, 5, '0', 2, 0, 'a'])).toEqual(['test', 5, '0', 2, 'a',  0, 0 ]);
    })
})
describe('reverseWords', () => {
    test('should return value correctly', () => {
        expect(reverseWords('The quick lazy dog.')).toBe('ehT kciuq yzal .god');
    })
})

describe('createUrl', () => {
    test('should return value correctly', () => {
        expect(createUrl('/api/{list}/{id}', {list: 'items', id: 0})).toBe('/api/items/0');
    })
})

describe('invertColor', () => {
    test('should return value correctly', () => {
        expect(invertColor('#012345')).toBe('#fedcba');
    })
	test('should throw error with broken color', () => {
		expect(() => invertColor('#01234')).toThrowError(new Error('Invalid HEX color.'));
    })
})


describe('transformState', () => {
    test('addProperties: should return value correctly', () => {
        expect(transformState(
			{foo: 'bar', name: 'Jim'},
			[{operation: 'addProperties', properties: {yet: 'another property'}}]))
			.toEqual({foo: 'bar', name: 'Jim', yet: 'another property' })
    })
	test('removeProperties: should return value correctly', () => {
        expect(transformState(
			{foo: 'bar', name: 'Jim'},
			[{operation: 'removeProperties', properties: ['foo']}]))
			.toEqual({ name: 'Jim'})
    })
	test('clear: should return value correctly', () => {
        expect(transformState(
			{foo: 'bar', name: 'Jim'},
			[{operation: 'clear'}]))
			.toEqual({})
    })
	test('clear: should return value correctly', () => {
        expect(() => transformState(
			{foo: 'bar', name: 'Jim'},
			[{operation: 'delete'}]))
			.toThrowError(new Error('Operation name delete is unknown'))
    })

	test('clear: should return value correctly', () => {
        expect(() => transformState(
			{foo: 'bar', name: 'Jim'},
			[{operation: 'removeProperties', properties: 'foo'}]))
			.toThrowError(new Error('removeProperties: Invalid properties format.'))
    })
})

