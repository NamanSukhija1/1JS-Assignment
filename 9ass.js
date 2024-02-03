const equ= [1, 2, 999, 56, "Mithun", 1234, "PW"];

for (let i = 0; i < equ.length; i++) {
  if (typeof equ[i] === "string") {
    console.log(`Found The First String: ${equ[i]}`);
    break;
  }
}