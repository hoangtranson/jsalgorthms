
export const arrayofRandom = randomCeil => length => Array.from({ length: length }, (v, i) => Math.floor(Math.random() * randomCeil));

export const timeIt = (label, fn) => {
    var start = performance.now();
    fn();
    var end = performance.now();
    return end - start;
}