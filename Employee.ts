interface Person{
    firstName: string;
    lastName: string;
    age?: number;
    readonly id: number;

    getFullName(): string;
    getAge(): number;
    setAge(age: number): void;
    getID(): number;

}

class Employee implements Person{
    firstName: string;
    lastName: string;
    age?: number;
    readonly id: number;
    constructor(firstName: string, lastName: string, age?: number, id?: number){
        this.firstName = firstName;
        this.lastName = lastName;
        if(age){
            this.age = age;
        }
        if(id){
            this.id = id;
        }
        //this.id = id;
    }
getFullName(): string{
    return `${this.firstName} ${this.lastName}`;
}
getAge(): number{
    return this.age;
}
setAge(age: number): void{
    this.age = age;
}
getID(): number{
    return this.id;
}
}
let emp=new Employee("Shakeel", "Ahmed", 36, 1);
console.log(emp.getFullName());
console.log(emp.getAge());
emp.setAge(37);
console.log(emp.getAge());
console.log(emp.getID());
