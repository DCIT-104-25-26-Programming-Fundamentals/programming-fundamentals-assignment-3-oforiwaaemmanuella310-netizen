const readlineSync = require('readline-sync');

function printTable(number) {
    console.log("Multiplication Table for " + number + ":");

    for (let i = 1; i <= 12; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

function printTables(n) {
    if (n <= 0) {
        console.log("Error: Number must be positive.");
        return;
    }

    for (let i = 1; i <= n; i++) {
        printTable(i);
        console.log("---------------------------");
    }
}

function main() {
    let number = readlineSync.questionInt("Enter a number: ");

    printTable(number);

    let n = readlineSync.questionInt("\nEnter a number N: ");

    printTables(n);
}

main();