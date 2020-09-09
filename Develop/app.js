//cutom classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//render function
const render = require("./lib/htmlRenderer");
//question objects modularized into own js file
const Questions = require("./lib/Questions.js");
//npm and dependants
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const chalk = require("chalk");
//custom functions to enable for loop
function objContentToList(obj) {
    let out = [];
    Object.keys(obj).forEach(key => out.push(obj[key]));
    return out;
}

function stringToConstructor(string) {
    if (string === 'manager') return (...input) => new Manager(...input);
    if (string === 'engineer') return (...input) => new Engineer(...input);
    if (string === 'intern') return (...input) => new Intern(...input);
}
// run this block immediately, under async
(async() => {
    try {
        let employeeArray = [];
        //user must input manager
        let employeeTypes = ['manager'];
        //for everything in the list
        for (const employeeType of employeeTypes) {
            //prompt
            const employeeData = await inquirer.prompt(Questions[employeeType]);
            //make object
            const employeeObj = stringToConstructor(employeeType)(...objContentToList(employeeData));
            //store
            employeeArray.push(employeeObj);
            //prompt add more? can only add engineer and intern
            const line = new inquirer.Separator('--------');
            const { response } = await inquirer.prompt({
                type: "list",
                name: "response",
                message: chalk `{white Would you like to add another employee?}`,
                choices: ['engineer', 'intern', line, 'no']
            });
            //if 'no' stop the loop
            if (response === 'no') break;
            //else add one more thing to do 
            else employeeTypes.push(response);
        }
        //check if file exists, make it if it doesn't
        if (!fs.existsSync("./output")) fs.mkdirSync("./output");
        //get output path
        const OUTPUT_DIR = path.resolve(__dirname, "output");
        const outputPath = path.join(OUTPUT_DIR, "team.html");
        //render the html and write it to output dir        
        writeFileAsync(outputPath, render(employeeArray));
        console.log(chalk `{green.bold Success! Your file has been rendered in the output directory as 'team.html'}`);
    } catch (err) { console.log(err) };
})();