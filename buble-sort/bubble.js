
const swap = (list, i, j) => {
    list = list.slice();
    [list[i], list[j]] = [list[j], list[i]];
    return list;
};

const sortListPortion = (list, left, right) => {
    if (left === right) return list;

    if (list[left] > list[left + 1]) {
        return sortListPortion(swap(list, left, left + 1), left + 1, right);
    }

    return sortListPortion(list, left + 1, right);
};

const bubbleSortHelper = (list, pointer) => {
    if (pointer === 0) return list;

    return bubbleSortHelper(sortListPortion(list, 0, pointer), pointer - 1);
};

const bubbleSort = list =>
    bubbleSortHelper(list, list.length - 1);

export default bubbleSort;