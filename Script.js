  // myGrades is not defined. Added let to define myGrades
 let myGrades = [100, 100, 90, 73, 78, 94, 86];
 // myAverage is not defined. Added let to define myAverage
 let myAverage = 0;
    
    for (let i = 1; i <= myGrades.length; i++) {
    myAverage += myGrades[i];
}

    myAverage = myAverage / myGrades.length;
    console.log("My grade average is " + myAverage);

    "use strict"
    let myNumber = "Orange";
    
    if (myNumber >= 0 && myNumber <= 100) {
        console.log("Your number is " + myNumber)

    }

    else {
        console.log("system 32 will now be deleted");
    }