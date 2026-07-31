const readlineSync = require('readline-sync');

function inputMatrix(rows, cols) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question(`Enter row ${i + 1}: `);
        let values = row.split(" ").map(Number);

        matrix.push(values);
    }

    return matrix;
}

function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
    }
}

function transposeMatrix(matrix) {
    let transpose = [];

    for (let i = 0; i < matrix[0].length; i++) {
        transpose[i] = [];

        for (let j = 0; j < matrix.length; j++) {
            transpose[i][j] = matrix[j][i];
        }
    }

    return transpose;
}

function addMatrices(A, B) {
    let result = [];

    for (let i = 0; i < A.length; i++) {
        result[i] = [];

        for (let j = 0; j < A[i].length; j++) {
            result[i][j] = A[i][j] + B[i][j];
        }
    }

    return result;
}

function multiplyMatrices(A, B) {
    let result = [];

    for (let i = 0; i < A.length; i++) {
        result[i] = [];

        for (let j = 0; j < B[0].length; j++) {
            result[i][j] = 0;

            for (let k = 0; k < B.length; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return result;
}

function main() {
    console.log("Matrix Operations");
    console.log("1. Transpose Matrix");
    console.log("2. Add Two Matrices");
    console.log("3. Multiply Two Matrices");

    let choice = readlineSync.questionInt("Select an operation (1-3): ");

    if (choice === 1) {
        let rows = readlineSync.questionInt("Enter number of rows: ");
        let cols = readlineSync.questionInt("Enter number of columns: ");

        let matrix = inputMatrix(rows, cols);

        console.log("\nOriginal Matrix:");
        displayMatrix(matrix);

        console.log("\nTransposed Matrix:");
        displayMatrix(transposeMatrix(matrix));
    }

    else if (choice === 2) {
        let rows = readlineSync.questionInt("Enter number of rows: ");
        let cols = readlineSync.questionInt("Enter number of columns: ");

        console.log("Enter Matrix A:");
        let A = inputMatrix(rows, cols);

        console.log("Enter Matrix B:");
        let B = inputMatrix(rows, cols);

        console.log("\nSum of Matrices:");
        displayMatrix(addMatrices(A, B));
    }

    else if (choice === 3) {
        let rowsA = readlineSync.questionInt("Enter rows of Matrix A: ");
        let colsA = readlineSync.questionInt("Enter columns of Matrix A: ");

        let rowsB = readlineSync.questionInt("Enter rows of Matrix B: ");
        let colsB = readlineSync.questionInt("Enter columns of Matrix B: ");

        if (colsA !== rowsB) {
            console.log("Error: Matrix multiplication is not possible.");
            return;
        }

        console.log("Enter Matrix A:");
        let A = inputMatrix(rowsA, colsA);

        console.log("Enter Matrix B:");
        let B = inputMatrix(rowsB, colsB);

        console.log("\nProduct of Matrices:");
        displayMatrix(multiplyMatrices(A, B));
    }

    else {
        console.log("Invalid choice.");
    }
}

main();