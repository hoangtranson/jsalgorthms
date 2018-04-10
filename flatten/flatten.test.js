import flatten from './flatten';
import { arrayofRandom, timeIt } from '../utils/array';

const utimateArr = [[1, 2, [3, 4]], [[[5, 6]]], 7, 8, [9]];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
describe('flatten algorithm', () => {
    test('should flatten a deeply nested array', () => {
        const _flat = flatten(utimateArr);
        expect(_flat).toEqual(expected);
    });
    test('should flatten a non-nested array', () => {
        const _flat = flatten(expected);
        expect(_flat).toEqual(expected);
    });
    test('should flatten a deeply nested array', () => {
        const _flat = flatten([]);
        expect(_flat).toEqual([]);
    });
    test('run under 2ms', () => {
        const timerun = timeIt('time run', () => {
            flatten(utimateArr);
        });
        expect(timerun).toBeLessThanOrEqual(2);
    });
    
});
