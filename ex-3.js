// เริ่มเขียนโค้ดตรงนี้
function multiplicationTable(n) {
  let Result = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      Result += i * j + "\t";
    }
    Result += "\n";
  }

  return Result;
}

console.log(multiplicationTable(3));
