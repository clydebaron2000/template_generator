// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name = "none", id = "0", email = "none@provider.com") {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() { return this.name }
    getId() { return this.id }
    getEmail() { return this.email }
    getRole() { return 'Employee' }
}
module.exports = Employee;