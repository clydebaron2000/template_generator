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
const chalk = require("chalk");
//custom functions to enable for loop
function objContentToList(obj) {
    return Object.keys(obj).map(key => obj[key]);
}
//for the loop
function stringToConstructor(string) {
    if (string === 'manager') return (...input) => new Manager(...input);
    if (string === 'engineer') return (...input) => new Engineer(...input);
    if (string === 'intern') return (...input) => new Intern(...input);
}
// run this block immediately, under async
(async() => {
    try {
        let employeeArray = [],
            employeeTypes = ['manager'];
        //for everything in the list
        for (const employeeType of employeeTypes) {
            //prompt
            const employeeData = await inquirer.prompt(Questions[employeeType]);
            //make object & store
            employeeArray.push(stringToConstructor(employeeType)(...objContentToList(employeeData)));
            //prompt add more? can only add engineer and intern
            const { response } = await inquirer.prompt({
                type: "list",
                name: "response",
                message: chalk `{white Would you like to add another employee?}`,
                choices: ['engineer', 'intern', new inquirer.Separator('--------'), 'no']
            });
            //if 'no' stop the loop, break to ensure loop is exited.
            if (response === 'no') break;
            //else add one more thing to do 
            else employeeTypes.push(response);
        }
        //check if file exists, make it if it doesn't
        if (!fs.existsSync("./output")) fs.mkdirSync("./output");
        //get output path
        const outputPath = path.join(path.resolve(__dirname, "output"), "team.html");
        //render the html and write it to output dir        
        fs.writeFileSync(outputPath, render(employeeArray));
        console.log(chalk `{green.bold Success! Your file has been rendered in the output directory as 'team.html'}`);
    } catch (err) { console.log(err) };
})();