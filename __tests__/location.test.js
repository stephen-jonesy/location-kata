const {location} = require('../location');

describe('location', () => {
    test('returns empty array if passed empty array ', () => {
        expect(location([])).toEqual([]);
    });
    test('when passed array of one object, returns one object with location', () => {
        const input =   [{ name: 'Hypatia', age: 31, location: 'leeds' }]
        const result = [{ name: 'Hypatia', age: 31, location: 'leeds' }]

        expect(location(input)).toEqual(result);
    });
    test('returns single object with location as remote, for single obj with location', () => {
        const input =   [{ name: 'Ramanujan', age: 22 }];
        const result =   [{ name: 'Ramanujan', location: 'remote', age: 22 }];

        expect(location(input)).toEqual(result);
    });
    test('returns all objects, adding remote location to those without location property', () => {
        const input = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
        ]
        const result = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location: 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' }
        ];

        expect(location(input)).toEqual(result);
    });
    test('Check for side-effects', () => {
        const input = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
        ];
        const result = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location: 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' }
        ];
        location(input);  
        expect(input).not.toEqual(result);

    });
});