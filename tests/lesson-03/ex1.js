// const Readline = require("node:readline");
// const { stdin: input, stdout: output } = require("node:process");

// const rl = Readline.createInterface({ input, output });

// rl.question("Nhập giá trị: ", function (number) {
//     console.log(`Giá trị nhập là ${number}`)
//     console.log(typeof (number));
//     rl.close();
// });

const number = 28;
// const number = -1;
// const number = 0;

if (number > 0) {
    console.log("Giá trị bạn nhập là số dương");
}
else if (number < 0) {
    console.log("Giá trị bạn nhập là số âm");
}
else console.log("Giá trị bạn nhập là 0 - không âm cũng không dương")
