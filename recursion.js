//question one all about fluff

// function sheep(num) {
//     if(num === 0) {
//         return 'All sheep jumped overe the fence'
//     }
//     let message = num + ': Another sheep jumps over the fence\n'
//     message = message + sheep(num -1)
//     return message;
// }
// console.log(sheep(5))

// function sheep(num) {
//     if(num === 0) {
//         console.log('All sheep jumped overe the fence')
//     } else {
//         console.log(num + ':Another sheep jumps over the fence')
//         sheep(num-1)
//     }
// }
// sheep(5)

//question 2 power calculator

// function powerCalculator(base, exp) {
//     if(exp === 1) {
//         return base;
//     }
//     return base * (powerCalculator(base, exp-1))
// }
// console.log(powerCalculator(3,14))

//question 3 reverse string

// function reverseStr(str) {
//     if(str.length === 0) {
//         return str
//     }
//     const newStr = str.slice(str.length-1)
//     return newStr + reverseStr(str.slice(0,str.length-1))
// }
// console.log(reverseStr('hello'))

// question 4 