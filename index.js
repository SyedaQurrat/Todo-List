import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;
console.log(chalk.green("\n\t Welcome to Todo-list\n"));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.yellow("Select an option you want to do:"),
                choices: [
                    "Add Task",
                    "Show Task",
                    "Remove Task",
                    "Exit"
                ]
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Show Task") {
            ShowTask();
        }
        else if (option.choice === "Remove Task") {
            await removeTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
            console.log(chalk.green("Exiting..."));
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.yellow("Enter your task:")
        }
    ]);
    todolist.push(newTask.task);
    console.log(chalk.green(`\n${newTask.task} : Your task added to the Todo-list.\n`));
};
let ShowTask = () => {
    console.log(chalk.green("\nYour Todo-list:\n"));
    todolist.forEach((task, index) => {
        console.log(`${index + 1} : ${task}`);
    });
    console.log();
};
let removeTask = async () => {
    let removeTaskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "input",
            message: chalk.yellow("Enter the index of the task you want to remove:")
        }
    ]);
    let index = parseInt(removeTaskIndex.index) - 1;
    if (index >= 0 && index < todolist.length) {
        let removedTask = todolist.splice(index, 1);
        console.log(chalk.green(`\n${removedTask} : Task removed from the Todo-list.\n`));
    }
    else {
        console.log(chalk.red("\nInvalid index. Task not removed.\n"));
    }
};
main();
