const Engineer = require('../lib/Engineer');

test("test getRole method in engineer", () => {
    const role = "engineer";
    const eRole = new Engineer("Caleb", 1, role);
    expect(eRole.getRole()).toBe(role);
});