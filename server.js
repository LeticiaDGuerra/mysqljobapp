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
        "View All Employees",
        "Add Employees",
        "Add Departments",
        "Add Roles",
        "View All Departments",
        "View by Manager",
        "View All Roles",
        "Update Roles",
        "exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
        
      case "View All Employee":
        viewEmp();
        break;

      case "Add Employees":
        addEmp();
        break;

      case "Add Departments":
        addDep();
        break;

      case "Add Roles":
        addRole();
        break;
      
      case "View All Departments":
        viewDep();
        break;

      case "View by Manager":
        viewMan();
        break;

      case "View All Roles":
        viewRoles();
        break;
      
      case "Updating Roles":
        updateEmp();
        break;
      
      case "exit":
        connection.end();
        break;
      }
    });
}
