let a = [], totalMark = 0;
let maxMark;

while (true) {
    let maxInput = prompt("Enter maximum mark per subject:");
    if (maxInput === null) {
        alert("Input cancelled. Exiting...");
        break;
    }

    maxInput = maxInput.trim();

    if (maxInput === "") {
        alert("Empty input is not allowed. Please enter a number.");
        continue;
    }

    maxMark = Number(maxInput);

    if (!isNaN(maxMark) && maxMark > 0) {
        break;
    } else {
        alert("Invalid input, please enter a valid number.");
    }
}

if (maxMark && !isNaN(maxMark) && maxMark > 0) {
    for (let i = 0; i < 5; i++) {
        let input = prompt("Enter mark of subject " + (i + 1) + ":");
        if (input === null) {
            alert("Input cancelled. Exiting...");
            break;
        }

        input = input.trim();

        if (input === "") {
            alert("Empty input is not allowed. Please enter a number.");
            i--;
            continue;
        }

        let subjectMark = Number(input);

        if (subjectMark > maxMark) {
            alert("You entered a mark greater than the maximum (" + maxMark + "). Please re‑enter.");
            i--;
        } else if (!isNaN(subjectMark)) {
            a[i] = subjectMark;
            totalMark += subjectMark;
        } else {
            alert("Invalid input, please enter a number.");
            i--;
        }
    }

    if (a.length > 0) {
        let average = totalMark / a.length;
        let percentage = (totalMark / (maxMark * a.length)) * 100;
        let grade;
        if (percentage >= 90) grade = "A+";
        else if (percentage >= 80) grade = "A";
        else if (percentage >= 70) grade = "B";
        else if (percentage >= 60) grade = "C";
        else if (percentage >= 50) grade = "D";
        else grade = "F";


        let marksSummary = "";
        for (let i = 0; i < a.length; i++) {
            marksSummary += "Subject " + (i + 1) + ": " + a[i] + "\n";
        }

        alert("Marks Summary:\n" + marksSummary +
            "\nTotal marks Obtained: " + totalMark +
            "\nAverage: " + average.toFixed(1) +
            "\nPercentage: " + percentage.toFixed(1) + "%" +
            "\nGrade: " + grade);
    }
}
