const readlineSync = require("readline-sync");

function findSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

function findAverage(numbers) {
    return findSum(numbers) / numbers.length;
}

function findMaximum(numbers) {
    let maximum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
        }
    }

    return maximum;
}

function findMinimum(numbers) {
    let minimum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minimum) {
            minimum = numbers[i];
        }
    }

    return minimum;
}

function main() {
    const count = readlineSync.questionInt("How many numbers? ");

    if (count <= 0) {
        console.log("Error: Number of values must be positive.");
        return;
    }

    let numbers = [];

    for (let i = 0; i < count; i++) {
        const number = readlineSync.questionFloat(`Enter number ${i + 1}: `);
        numbers.push(number);
    }

    console.log("\nResults:");
    console.log("Sum:     " + findSum(numbers));
    console.log("Average: " + findAverage(numbers));
    console.log("Maximum: " + findMaximum(numbers));
    console.log("Minimum: " + findMinimum(numbers));
}

main();