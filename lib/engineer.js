const employee = require('./employee');
class engineer extends employee {
    constructor(name, id) {
        super(name, id);
    }
    getRole() {
        return "engineer";
    }
}
module.exports = engineer;