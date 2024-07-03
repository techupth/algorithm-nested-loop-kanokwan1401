//เริ่มเขียนโค้ดตรงนี้;
function printStar(n) {
  let finalResult = "";
  for (let i = 1; i <= n; i++) {
    let rowResult = "";
    for (let j = 0; j < i; j++) {
      rowResult += "*" + "\t";
    }
    finalResult += rowResult + "\n";
  }
  return finalResult;
}

console.log(printStar(5));

// Solution 2
// function printStar(n) {
//   let finalResult = "";
//   for (let i = 1; i <= n; i++) {
//     finalResult += "*\t".repeat(i) + "\n";
//   }
//   return finalResult;
// }

// console.log(printStar(5));
