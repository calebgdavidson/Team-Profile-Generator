const inquirer = require('inquirer');
const fs = require('fs');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
const renderTeam = require('./src/template');
teamArray = [];

function run() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: "choose role",
        name: 'role',
        choices: ['manager', 'engineer', 'intern'],
      },
    ]).then(function (inputs) {
      if (inputs.role === 'manager') {
        managerQuestion();
      }
      else if (inputs.role === 'engineer') {
        engineerQuestion();
      }
      else if (inputs.role === 'intern') {
        internQuestion();
      }
    })
}

function managerQuestion() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'enter manager name',
      name: 'mName',
      validate: (mName) => {
        if (mName) {
          return true;
        }
        else {
          console.log('enter manager name');
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "enter manager id",
      name: 'mID',
      validate: (mID) => {
        if (mID) {
          return true;
        }
        else {
          console.log("enter manager id");
          return false;
        }
      }
    },
  ]).then((answers) => {
    const Manager = new manager(answers.mName, answers.mID);
    teamArray.push(Manager);
    run();
  });
}

function engineerQuestion() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'enter engineer name',
      name: 'eName',
      validate: (eName) => {
        if (eName) {
          return true;
        }
        else {
          console.log('enter engineer name');
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "enter engineer id",
      name: 'eID',
      validate: (eID) => {
        if (eID) {
          return true;
        }
        else {
          console.log("enter engineer id");
          return false;
        }
      }
    },
  ]).then((answers) => {
    const Engineer = new engineer(answers.eName, answers.eID);
    teamArray.push(Engineer);
    run();
  });
}

function internQuestion() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'enter intern name',
      name: 'iName',
      validate: (iName) => {
        if (iName) {
          return true;
        }
        else {
          console.log('enter intern name');
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "enter intern id",
      name: 'iID',
      validate: (iID) => {
        if (iID) {
          return true;
        }
        else {
          console.log("enter intern id");
          return false;
        }
      }
    },
  ]).then((answers) => {
    const Intern = new intern(answers.iName, answers.iID);
    teamArray.push(Intern);
    run();
  });
}

function createTeam() {
  console.log("created team profile cards")
  fs.writeFile('./dist_output/index.html', renderTeam(teamArray), function (err) {
    if (err) {
      return console.log(err)
    }
  });
}

run();