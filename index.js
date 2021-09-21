// Code your solution in this file!
//const returnFirstTwoDrivers = (array) => {
//return array.slice(0,2);
//}
//const returnLastTwoDrivers = (array) => {
//return array.slice(2, 4);
//}
//const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const returnFirstTwoDrivers = (array) => {
    return array.slice(0, 2);
}
const returnLastTwoDrivers = (array) => {

    return array.slice(2, 4);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (integer) => {
    return () => integer * 5;
}

const fareDoubler = createFareMultiplier => {
    return createFareMultiplier * 2;
}

const fareTripler = createFareMultiplier => {
    return createFareMultiplier * 3;
}

function selectDifferentDrivers(array, driver) {
    if (driver === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(array);
    }
    else {
        return returnLastTwoDrivers(array);
    }
}

// selectDifferentDrivers(array, returnLastTwoDrivers);

// const selectDifferentDrivers = function(arrayOfDrivers, drivers) {
//     if (drivers =)
// }
