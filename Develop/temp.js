// const supportsColor = require('supports-color');
// if (supportsColor.stdout) {
//     console.log('Terminal stdout supports color');
// }
// if (supportsColor.stdout.has256) {
//     console.log('Terminal stdout supports 256 colors');
// }
// if (supportsColor.stdout.has16m) {
//     console.log('Terminal stderr supports 16 million colors (truecolor)');
// }
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const chalk = require('chalk');
const inquirer = require('inquirer');
const fs = require("fs");
// console.log(chalk `{green.bold ${"green"}}
//     `);
// console.log(chalk `{green.bgBlue ${"dark green"}}
//     `);
// function objContentToList(obj) {
//     let out = [];
//     Object.keys(obj).forEach(key => {
//         out.push(obj[key])
//     });
//     return out;
// }
// var employeeType = "a";
// let another = (chalk `{white Would you like to add another ${ chalk`{green.bold ${employeeType}}`}?}`);
// const askAnother = {
//     type: "confirm",
//     name: "cont",
//     message: another,
//     default: false,
// };
// (async() => {
//     var resp = await inquirer.prompt(askAnother);
//     const manager = {
//         name: "h",
//         id: 0,
//         email: "gmail",
//         officeNumber: 0
//     }
//     function strToObj(string) {
//         return (...input) => new Manager(...input);
//     }
//     var obj = strToObj("")(...objContentToList(manager));
//     console.log(obj);
// })();