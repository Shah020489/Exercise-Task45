var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, age, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        if (age) {
            this.age = age;
        }
        if (id) {
            this.id = id;
        }
        //this.id = id;
    }
    Employee.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Employee.prototype.getAge = function () {
        return this.age;
    };
    Employee.prototype.setAge = function (age) {
        this.age = age;
    };
    Employee.prototype.getID = function () {
        return this.id;
    };
    return Employee;
}());
var emp = new Employee("Shakeel", "Ahmed", 36, 1);
console.log(emp.getFullName());
console.log(emp.getAge());
emp.setAge(37);
console.log(emp.getAge());
console.log(emp.getID());
