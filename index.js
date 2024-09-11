const employee = {
    name : "Extra",
    streetAddress : "Tech",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key] : value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const update = {...employee}
    delete update[key]
    return update
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
