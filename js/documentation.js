/**
 * @description returns sum of two elements
 * @param {anytype} first component of sum
 * @param {anytype} second component of sum
 * @return {anytype} sum of two components
 */
function sum({first, second} ) {
    return first + second
}

console.log(sum({first: 2, second: 3}))
