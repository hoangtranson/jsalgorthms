import bubbleSort from './bubble';
import { arrayofRandom, timeIt } from '../utils/array';

const arrayThousand = arrayofRandom(1000)(1000);

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
