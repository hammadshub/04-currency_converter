#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let Convertion = {
    "PKR": {
        "USD": 0.044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.70,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.55,
        "GBP": 0.83,
        "USD": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: chalk.green("SELECT YOUR CURRENCY!"),
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: chalk.yellow("SELECT YOUR CONVERTION CURRENCY!")
    }, {
        type: "number",
        name: "amount",
        message: chalk.blue("Enter your convertion amount...")
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = Convertion[from][to] * amount;
    console.log(chalk.redBright(`Your convertion from ${from} to ${to} is ${result}`));
}
else {
    console.log(chalk.bgRed("Invalid input"));
}
