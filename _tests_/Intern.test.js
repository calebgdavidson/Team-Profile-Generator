const Intern = require('../lib/Intern');

test("test getRole method in intern", () => {
    const role = "intern";
    const eRole = new Intern("Thomas", 1, role);
    expect(eRole.getRole()).toBe(role);
});