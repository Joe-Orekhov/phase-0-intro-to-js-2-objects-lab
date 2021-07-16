const employee = {
   name : `joe`,
   street : `Broknn Dreams`
};

//The curly brackets make a new object and modifies that one. not the original.
function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {[key] : value});
};
const newEmployee = updateEmployeeWithKeyAndValue(employee, key, value);

//There are no curly brackets thus being distructive.
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign(employee, {[key] : value});
};

//A clone of "employee" object called "newEmployee". And modifly the clone "newEmployee"
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
};


 /* const newEmployee = {...employee};
    newEmployee.name =`$[value]`;
    return newEmployee.name;*/