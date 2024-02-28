// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds(10); 
printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(name, age) {
    let oldEnoughMsg = `Congrats ${name}! You can drive!`;
    let tooYoungMsg = `Sorry ${name}, you need to wait ${
        16 - age
    } year(s) until you can drive.`;

    if (age >= 16) {
        console.log(tooYoungMsg);
    } else {
        console.log(oldEnoughMsg);
    }
}

checkAge(22,"Chad");

// Exercise 3 Section
console.log("EXERCISE 4:\n==========\n");
function whichQuadrant(x, y) {
    if (x > 0 && y > 0) {
        console.log(`${x}, ${y} is in Quandrant 1`);
    } else if (x < 0 && y > 0) {
        console.log(`${x}, ${y} is in Quandrant 2`);
    } else if (x < 0 && y < 0) {
        console.log(`${x}, ${y} is in Quandrant 3`);
    } else if (x > 0 && y < 0) {
        console.log(`${x}, ${y} is in Quandrant 4`);
    } else if (x != 0 && x == 0) {
        console.log(`${x}, ${y} is on the x axis`);
    } else if (y != 0 && x == 0) {
        console.log(`${x}, ${y} is on the y axis`);
    } else {
        console.log(`${x}, ${y} is on the origin`);
    }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function typeOfTriangle(side1, side2, side3) {
    let isValid = false;
    if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
        isValid = true;
    }
    if (isValid) {
        if (side1 == side2 && side2 == side3) {
            console.log(
                `Sides ${side1}, ${side2}, ${side3} form an equilateral triangle`
            );
        } else if (side1 == side2 || side2 == side3 || side1 == side3) {
            console.log(
                `Sides ${side1}, ${side2}, ${side3} form an isosceles triangle`
            );
        } else {
            console.log(`Sides ${side1}, ${side2}, ${side3} form a scalene triangle`);
        }
    }

    if (isValid == false) {
        console.log("invalid triangle");
    }
}

//typeOfTriangle(2, 2, 2); equilateral
//typeOfTriangle(1, 2, 2); isosceles
//typeOfTriangle(1, 1, 2); invalid
//typeOfTriangle(2, 3, 4); scalene

//Exercise 5 
console.log("Exercise 5: \n=======\n");

function dataPlan(planLimit, day, usage) {
    let daysLeftOnPlan = 30 - day;
    let averageDailyUse = usage / day;
    let suggestedAverageUse = planLimit / 30;
    let howMuchDateLeft = planLimit - usage;
    let projectUsage = Math.abs(planLimit - (averageDailyUse * 30));
    let suggestedUsage = howMuchDateLeft / daysLeftOnPlan;

    if (averageDailyUse > suggestedAverageUse) {
        console.log(`${day} day(s) used, ${daysLeftOnPlan} day(s) remaining
        What you are using: ${averageDailyUse.toFixed(2)} GB/day.
        You are EXCEEDING your average daily use/
        What you should use: (${suggestedAverageUse.toFixed(2)} GB/day),
        ${projectUsage.toFixed(2)} GB.
        To stay below your data plan, use no more than ${suggestedUsage.toFixed(2)} GB/day.`);
    }
    else if ( averageDailyUse < suggestedAverageUse) {
        console.log(`${day} days used, ${daysLeftOnPlan} days remaining
        Average daily use: ${averageDailyUse.toFixed(2)}
        You are UNDER your average daily use (${averageDailyUse.toFixed(2)} GB/day),
        continuing this usage, you'll be under your data plan by 
        ${projectedUsage} GB.`);
    }
    else {
        console.log(`Your average daily use is ${averageDailyUse.toFixed(2)} GB/day, You are on target with your plan.`);
    }
}

//dataPlan(50, 12, 25);
//dataPlan(50, 15, 25);
//dataPlan(50, 10, 25);
//dataPlan(100, 15, 5);