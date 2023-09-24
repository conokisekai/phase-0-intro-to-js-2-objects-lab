// Write your solution in this file!
const employee = {
  name: "Conrad",
  streetAddress: "Nairobi",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee, [key]: value
  }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee[key] = value;
   return employee;
  }
function deleteFromEmployeeByKey(employee, key) {
  const updated = {...employee}
  delete updated[key]
  return updated
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key]
  return employee
}