const filterOutOdds = (...args) => args.filter(num => num % 2 === 0)

const findMin = (...args) => Math.min(...args)

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 })

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)]

//Slice and Dice!
const removeRandom = (items) => {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
}

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}

const combine = (obj1, obj2) => {
    let newObj = { ...obj1, ...obj2 }
    return newObj;
}

const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}