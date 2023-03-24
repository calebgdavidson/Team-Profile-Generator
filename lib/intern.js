const employee = require('./employee');
class intern extends employee {
    constructor(name, id) {
        super(name, id);
    }
    getRole () {
        return "Intern"
    }
}
module.exports = intern;