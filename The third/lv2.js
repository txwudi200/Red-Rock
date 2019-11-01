var arr = [
    [1, 2], 3, [4, [5, [6]], 7]
]

function flatten(arr) {　　
    return [].concat(...arr.map(x => Array.isArray(x) ? flatten(x) : x))
}
console.log(flatten(arr))