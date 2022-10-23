let quote = 'The quote '
let text = "'There is no exercise better for the heart than reaching down and lifting people up.'"
let author = ' by John Holmes teaches us to help one another.'
let teresa1 = '"Love is not patronizing and charity' 
let teresa2 = "isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't"
let teresa3 = ' just give money but reach out your hand instead."'
let ten = '10'
let intTen = parseInt(ten)
let num = '9.8'
let numFloat = parseFloat(num)
let numInt = parseInt(numFloat)
let py = 'python'
let ja = 'jargon'
let sentence = 'I hope this course is not full of jargon.'
let randomNum = Math.floor(Math.random()*11)
let randomFifty = Math.floor((Math.random()+1)*50)
let randomTwo = Math.floor(Math.random()*256)
let string = 'JavaScript'
let subString = 'You cannot end a sentence with because because because is a conjunction'
console.log(quote,text,author)
console.log(teresa1,teresa2,teresa3)
console.log(typeof(intTen))
console.log(numInt+1)
console.log(py.includes('on'))
console.log(ja.includes('on'))
console.log(sentence.includes('jargon'))
console.log(randomNum)
console.log(randomFifty)
console.log(randomTwo)
console.log(string.charAt(Math.floor(Math.random()*11)))
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t6\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')
console.log(subString.substr(subString.indexOf('because'),8*3))