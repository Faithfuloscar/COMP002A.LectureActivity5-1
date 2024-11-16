  // myGrades is not defined. Added let to define myGrades
 let myGrades = [100, 100, 90, 73, 78, 94, 86];
 // myAverage is not defined. Added let to define myAverage
 let myAverage = 0;
    
 // The loop skipped first index in the array, solution set i=0 
    for (let i = 0; i < myGrades.length; i++) {
    myAverage += myGrades[i]; // adds each grade to the total.
}

    myAverage = myAverage / myGrades.length; // divides the total by the number of grades

    console.log("My grade average is " + myAverage); // outputs average

    // function to validate a grade input
    function validateNumber(number) {
        // checks if input is a number
        if(typeof number != 'number') {
            throw new Error("input must be a number");
        }

        // checks if input is less than 0
        if (number < 0){
            throw new Error("number cannot be less than 0");
        }

        // checks if input is greater than 100
        if (number > 100){
            throw new Error("number cannot be greater than 100")
        }

        console.log("Valid number: " + number);
    }

    // custom exception class
    class NumberValidationException extends Error{
        constructor(message) {
            super(message);
            this.name ="Number ValidationException"
        }
    }

    // function to validate a grade input
    function validateNumber(number) {
    // checks if input is a number
    if(typeof number != 'number') {
        throw new NumberValidationException("input must be a number");
    }
    
    // checks if input is less than 0
    if (number < 0){
        throw new NumberValidationException("number cannot be less than 0");
    }
    
    // checks if input is greater than 100
    if (number > 100){
        throw new NumberValidationException("number cannot be greater than 100")
    }
    
    console.log("Valid number: " + number);
}

try {
    validateNumber(110);
} catch(error) {
    if (error instanceof NumberValidationException){
        console.error("Number Validation Error: " + error.message);
    } else {
        console.error("Unexpected Error: " + error.message);
    }
}

try {
    validateNumber(23);
} catch (error){
    console.Error(error.message);
}