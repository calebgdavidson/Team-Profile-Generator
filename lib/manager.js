const employee = require("./employee");
class manager extends employee {
    constructor(name, id) {
        super(name, id);
    }
    getRole() {
        return "manager";
    }
}
module.exports = manager ;