function factorial(num) {
    console.log(num)
    if(num === 1) return 1
    return num * factorial(num - 1)
}

console.log(factorial(5))