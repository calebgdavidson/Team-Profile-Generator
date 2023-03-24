const Employee = require("../lib/Employee");

test("test employee name", () => {
    const name = "caleb";
    const eName = new Employee(name);
        expect(eName.name).toBe(name);
});
test("test employee id", () => {
    const id = 1;
    const eId = new Employee("caleb", id);
        expect(eId.id).toBe(id);
});
test("test getName method in employee", () => {
    const name = "caleb";
    const eName = new Employee(name);
        expect(eName.getName()).toBe(name);
});
test("test getID method in employee", () => {
    const id = 1;
    const eId = new Employee("caleb", id);
        expect(eId.getId()).toBe(id);
});
test("test getRole method in employee", () => {
    const role = "employee";
    const eRole = new Employee("caleb", 1, role);
        expect(eRole.getRole()).toBe(role);
});