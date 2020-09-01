const chalk = require("chalk");
const managerQuestions = [{
            type: "input",
            name: "name",
            message: chalk `{white What is the ${chalk `{yellow.bold manager's}`} full name?}`,
    default: () => "first, last",
    validate: (text) => {
        var err = '';
        if (!text.includes(' ')) err = "Type in your first name, followed by space, then your last name."
        else if (text.length < 3) err = "Your fist name followed by a space followed by your last name should be longer than 3 characters."
        else { return true }
        return chalk `{red.bold ${err}}`;
    }
}, {
    type: "input",
    name: "id",
    message: chalk `{white What is the ${chalk `{yellow.bold manager's}`} numeric ID?}`,
    default: () => "00000",
    filter: (text) => {
        return text.replace(/[^0-9]/g, '');
    },
    validate: (input) => {
        var err = '';
        if (isNaN(parseInt(input))) err = "Input is not a numer. Please enter your numeric ID"
        else { return true }
        return chalk `{red.bold ${err}}`;
    }
}, {
    type: "input",
    name: "email",
    message: chalk `{white What is the ${chalk `{yellow.bold manager's}`} email?}`,
    default: () => "manager@organization.com",
    validate: (input) => {
        var err = '';
        if (!input.includes('@') || !input.includes('.')) err = "Input is not a valid email."
        else { return true }
        return chalk `{red.bold ${err}}`;
    }
}, {
    type: "input",
    name: "officeNumber",
    message: chalk `{white What is the ${chalk `{yellow.bold manager's}`} office number?}`,
    default: () => 1000,
    filter: (input) => {
        return "" + parseFloat(input);
    },
    validate: (input) => {
        var err = '';
        if (isNaN(input)) err = "Office numbers must be a number";
        else if (parseInt(input) !== parseFloat(input)) err = "Office numbers cannot be decimal values";
        else if (parseInt(input) < 0) err = "Office numbers cannot be negative";
        else { return true }
        return chalk `{red.bold ${err}}`;
    }
}];
const engineerQuestions = [{
    type: "input",
    name: "name",
    message: chalk `{white What is the ${chalk `{yellow.bold engineer's}`} full name?}`,
    default: () => "first, last",
    validate: (text) => {
        var err = '';
        if (!text.includes(' ')) err = "Type in your first name, followed by space, then your last name."
        else if (text.length < 3) err = "Your fist name followed by a space followed by your last name should be longer than 3 characters."
        else { return true }
        return chalk `{red.bold ${err}}`;
    }
}, {
    type: "input",
    name: "id",
    message:chalk `{white What is the ${chalk `{yellow.bold engineer's}`} numeric ID?}`,
    default: () => "00000",
    filter: (text) => {
        return text.replace(/[^0-9]/g, '');
    },
    validate: (input) => {
        var err = '';
        if (isNaN(parseInt(input))) err = "Input is not a numer. Please enter your numeric ID"
        else { return true }
        return chalk `{red.bold ${err}}`;
    }
}, {
    type: "input",
    name: "email",
    message: chalk `{white What is the ${chalk `{yellow.bold engineer's}`} email?}`,
    default: () => "engineer@organization.com",
    validate: (input) => {
        var err = '';
        if (!input.includes('@') || !input.includes('.')) err = "Input is not a valid email."
        else { return true }
        return chalk `{red.bold ${err}}`;
    }
}, {
    type: "input",
    name: "github",
    message: chalk `{white What is the ${chalk `{yellow.bold engineer's}`} Github username?}`,
    default: () => 'username'
}];
const internQuestions = [{
    type: "input",
    name: "name",
    message: chalk `{white What is the ${chalk `{yellow.bold intern's}`} full name?}`,
    default: () => "first, last",
    validate: (text) => {
        var err = '';
        if (!text.includes(' ')) err = "Type in your first name, followed by space, then your last name."
        else if (text.length < 3) err = "Your fist name followed by a space followed by your last name should be longer than 3 characters."
        else { return true }
        return chalk `{red.bold ${err}}`;
    }
}, {
    type: "input",
    name: "id",
    message: chalk `{white What is the ${chalk `{yellow.bold intern's}`} numeric ID?}`,
    default: () => "00000",
    filter: (text) => {
        return text.replace(/[^0-9]/g, '');
    },
    validate: (input) => {
        var err = '';
        if (isNaN(parseInt(input))) err = "Input is not a numer. Please enter your numeric ID"
        else { return true }
        return chalk `{red.bold ${err}}`;
    }
}, {
    type: "input",
    name: "email",
    message: chalk `{white What is the ${chalk `{yellow.bold intern's}`} email?}`,
    default: () => "intern@organization.com",
    validate: (input) => {
        var err = '';
        if (!input.includes('@') || !input.includes('.')) err = "Input is not a valid email."
        else { return true }
        return chalk `{red.bold ${err}}`;
    }
}, {
    type: "input",
    name: "school",
    message: chalk `{white What is the ${chalk `{yellow.bold intern's}`} school?}`,
    default: () => "UCSD"
}];
const Questions = {
    manager: managerQuestions,
    engineer: engineerQuestions,
    intern: internQuestions
};
module.exports = Questions;