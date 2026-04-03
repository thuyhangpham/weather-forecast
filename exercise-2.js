var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32]; 

//Print the highest temperature to the console.
let highTemp = highTemperatures[0];

for (let i = 0; i < highTemperatures.length; i++) {
    if (highTemperatures[i] > highTemp) {
        highTemp = highTemperatures[i];
    }
}

console.log("Highest temperature:", highTemp);

// Print the lowest temperature to the console.
let lowTemp = lowTemperatures[0];

for (let i = 0; i < lowTemperatures.length; i++) {
    if (lowTemperatures[i] < lowTemp) {
        lowTemp = lowTemperatures[i];
    }           
}

console.log("Lowest temperature:", lowTemp);

// What is the average high temperature from the data set?
function calculateAvg(temp) {
    let total = 0;
    for (let i = 0; i < temp.length; i++) {
        total += temp[i];
    }
    return total / temp.length;
}

let avgHighTemp = calculateAvg(highTemperatures);
console.log("Average high temperature:", avgHighTemp);

// What is the average low temperature from the data set?
let avgLowTemp = calculateAvg(lowTemperatures);
console.log("Average low temperature:", avgLowTemp);

// What is the median high temperature from the data set?
function calculateMed(temp) {
    temp.sort((a,b) => a - b);
    let n = temp.length;
    if (n % 2 ===0) {
        return (temp[n/2 - 1] + temp[n/2]) / 2;
    } else { 
        return temp[(n+1)/2];
    }
}

let medHighTemp = calculateMed(highTemperatures);
console.log("Median high temperature:", medHighTemp);

// What is the median low temperature from the data set?
let medLowTemp = calculateMed(lowTemperatures);
console.log("Median low temperature:", medLowTemp);
