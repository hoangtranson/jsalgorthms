// const bubbleSort = require('./index');
import bubbleSort from './bubble';
import { arrayofRandom, timeIt } from '../utils/array';

const arrayThousand = arrayofRandom(1000)(1000);
// const array5Thousand = arrayofRandom(1000)(5000);

describe('buble sort 1 thousand element array', () => {

    test('array length > 0', () => {
        expect(arrayThousand.length).toBeGreaterThanOrEqual(1);
    });

    test('is 1000 element', () => {
        expect(arrayThousand.length).toBe(1000);
    });

    test('run under 300ms', () => {
        const timerun = timeIt('time run', () => {
            bubbleSort(arrayThousand);
        });
        expect(timerun).toBeLessThanOrEqual(300);
    });
    
});

// describe('buble sort 5 thousands element array', () => {

//     test('array length > 0', () => {
//         expect(array5Thousand.length).toBeGreaterThanOrEqual(1);
//     });

//     test('is 5000 element', () => {
//         expect(array5Thousand.length).toBe(5000);
//     });

//     test('run under 3000ms', () => {
//         const timerun = timeIt('time run', () => {
//             bubbleSort(array5Thousand);
//         });
//         expect(timerun).toBeLessThanOrEqual(3000);
//     });
    
// });