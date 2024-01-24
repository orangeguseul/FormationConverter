let array = []
let Number = 3777248
let Formation = 2
while (Number >= 1) {
  array.push(Number%Formation)
  Number = Math.floor(Number/Formation)
}
console.log(array.join(""))
