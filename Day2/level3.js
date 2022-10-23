let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let patternOne = /ove/gi
let bc = 'You cannot end a sentence with because because because is a conjunction'
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let str = sentence.replace(/[%$@#&;]/gi,'')
let txt = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let income = txt.match(/\d+/g)

console.log(love.match(patternOne))
console.log(bc.match(/because/gi))
console.log(str)
console.log(income)