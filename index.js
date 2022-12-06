// 1. The payroll system populates a record from an array
// Has a function called createEmployeeRecord
function createEmployeeRecord(array) {
    //console.log(array);
    const employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return employee;
}
const myArrayofArrays = [
    ['Hannah', 'Maratea', 'Student', 1],
    ['Bob', 'Maratea', 'Teacher', 20],
    ['Anna', 'Evans', 'Plumber', 1]
]


//console.log(createEmployeeRecord(['Hannah', 'Maratea', 'Student', 1]))
// 2. Process an Array of Arrays into an Array of employee records
// Has a function called createEmployeeRecords
function createEmployeeRecords (arrayOfArrays) {
   const arrayOfObjects = arrayOfArrays.map((array) => {
    return createEmployeeRecord(array)
   })
   return arrayOfObjects;
}


//console.log(createEmployeeRecords(myArrayofArrays));

function createTimeInEvent (employeeRecordObject, dateStamp) {
    const splitStamp = dateStamp.split(" ")
     const timeInObject = {
        type: "TimeIn",
        hour: parseInt(splitStamp[1]),
        date: splitStamp[0],
     }
     employeeRecordObject.timeInEvents.push(timeInObject);
     console.log(employeeRecordObject);
     return employeeRecordObject
}

function createTimeOutEvent (employeeRecordObject, dateStamp) {
    const splitStamp = dateStamp.split(" ")
     const timeOutObject = {
        type: "TimeOut",
        hour: parseInt(splitStamp[1]),
        date: splitStamp[0],
     }
     employeeRecordObject.timeOutEvents.push(timeOutObject);
     //console.log(employeeRecordObject);
     return employeeRecordObject 
}

function hoursWorkedOnDate (employeeRecordObject, splitStamp) {
 console.log(employeeRecordObject);
 console.log(splitStamp); 
return hoursWorked  
}

