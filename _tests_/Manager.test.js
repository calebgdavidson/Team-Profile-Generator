const Manager = require("../lib/Manager");

test("test getRole method in Manager", () => {
    const role = "manager";
    const eRole = new Manager("Manny", 1, role);
    expect(eRole.getRole()).toBe(role);
});