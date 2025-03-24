// console.log(10) // 10

// function fun(marks){
//   const a = marks || "absent"
//   console.log(`Marks ${a}`)
// }

// fun(20) // Marks 20
// fun(0) // Marks absent
// fun(80)// Marks 80

// function a() {
//   for (var i = 1; i < 5; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, i * 1000)
//     console.log('shiv')
//   }
//   console.log('ritik')
// }
// a()

function a() {
  for (var i = 1; i < 5; i++) {
    setTimeout(function () {
      console.log(i)
      console.log('ritik')
    }, i * 1000)
  }
}

a()
