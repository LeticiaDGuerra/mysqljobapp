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
  if (err) throw err;
  //Select all customers and return the result object:
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
function viewEmp() {
inquirer
  .prompt({
    name: "emp",
    type: "input",
    message: "View All Employees"
  })
    .then(function(answer) {
      var query = "SELECT * FROM job_list.employees_id;";
      connection.query(query, { emp: answer.emp}, function(err, res) {
        // if (err) throw err;
        // for (var i = 0; i < res.length; i++)// 
        {
          console.log("ID: " + res[i].id );
        }
        runSearch();
      });
    });
}
connection.query("SELECT * FROM job_list.employees_id;", function (err, result) {
  console.log(result);  
  // runSearch();
 });






// connection.release(function(err) {
//   if (err) throw err;
//   //Select all customers and return the result object:
//   connection.query("SELECT * FROM job_list.employee_id;", function (err, result) {
//     console.log(result);
//   });
// });
// connection.getConnection(function (err, connection) {
//   connection.query("SELECT * FROM job_list.employee_id;", function (err, rows) {
//       connection.release();
//       if (err) throw err;

//       console.log(rows.length);
//       res.send(JSON.stringify(rows));
//   });
// });

/// See if this works for view All Employees first it might not?//