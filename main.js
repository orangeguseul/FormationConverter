let array = []
let Number = 3213
let Formation = 2
while (Number >= 1) {
  array.push(Number%Formation)
  Number = Math.floor(Number/Formation)
}
ResultArray = array.reverse()
ResultString= ResultArray.join("")
console.log(ResultString)
