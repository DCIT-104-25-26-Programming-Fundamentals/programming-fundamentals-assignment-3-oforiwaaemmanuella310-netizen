const readlineSync = require('readline-sync');

let students = [];

function calculateAverage(student) {
    let sum = 0;

    for (let i = 0; i < student.scores.length; i++) {
        sum += student.scores[i];
    }

    return sum / student.scores.length;
}

function addStudent() {
    let name = readlineSync.question("Student name: ");
    let id = readlineSync.questionInt("Student ID: ");
    let numberOfScores = readlineSync.questionInt("How many scores? ");

    let scores = [];

    for (let i = 0; i < numberOfScores; i++) {
        let score = readlineSync.questionFloat("Enter score " + (i + 1) + ": ");
        scores.push(score);
    }

    let student = {
        name: name,
        id: id,
        scores: scores
    };

    students.push(student);

    console.log('Student "' + name + '" added successfully.');
}

function displayStudents() {
    if (students.length === 0) {
        console.log("No student records found.");
        return;
    }

    for (let i = 0; i < students.length; i++) {
        console.log("\nName: " + students[i].name);
        console.log("ID: " + students[i].id);
        console.log("Scores: " + students[i].scores.join(", "));
        console.log("Average Score: " + calculateAverage(students[i]).toFixed(2));
    }
}

function findAverageScore() {
    let id = readlineSync.questionInt("Enter student ID: ");

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            console.log(
                students[i].name + "'s average score: " +
                calculateAverage(students[i]).toFixed(2)
            );
            return;
        }
    }

    console.log("Student ID not found.");
}

function main() {
    let choice;

    do {
        console.log("\n================================");
        console.log("   STUDENT RECORD SYSTEM MENU");
        console.log("================================");
        console.log("1. Add student");
        console.log("2. Display all students");
        console.log("3. Calculate average score");
        console.log("4. Quit");

        choice = readlineSync.questionInt("Enter your choice (1-4): ");

        switch (choice) {
            case 1:
                addStudent();
                break;

            case 2:
                displayStudents();
                break;

            case 3:
                findAverageScore();
                break;

            case 4:
                console.log("Goodbye!");
                break;

            default:
                console.log("Invalid choice. Please try again.");
        }

    } while (choice !== 4);
}

main();