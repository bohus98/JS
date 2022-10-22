let challenge = '30 Days Of JavaScript'
let string = '30 Days Of '
let fang = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let sentence = 'You cannot end a sentence with because because because is a conjunction'

console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(3,7))
console.log(challenge.includes('Script'))
console.log(challenge.split(' '))
console.log(fang.split(','))

console.log(challenge.replace('JavaScript','Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('3'))
console.log(challenge.lastIndexOf('t'))
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))
console.log(challenge.trim(' '))
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('t'))
console.log(challenge.match('a'))
console.log(string.concat("JavaScript"))
console.log(challenge.repeat(2))