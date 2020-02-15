const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "rootroot",
  database: "job_list"
});
connection.connect(err => {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add Employee",
        "View Employee",
        "Update Roles",
        "exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "Add Employee":
        addEmp();
        break;

      case "View Employee":
        viewEmp();
        break;

      case "Updating roles":
        updateEmp();
        break;

      }
    });
}
