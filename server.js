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
        "Add Employees,Roles and Department",
        "View All Departments",
        "View by Manager",
        "View All Roles",
        "Update Employee",
        "exit",
      ]
    })
  .then(function(answer) {
      switch (answer.action) {
        
      case "View All Employees":
        viewEmp();
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

        case "Add Employees,Roles and Department":
        addEmp();
        break;

      case "Update Employee":
        updateEmp();
        break;
      
      case "exit":
        connection.end();
        break;
      }
    });
}
// function viewEmp() {
//   inquirer
//   .prompt({
//     name: "emp",
//     type: "input",
//     message: "View All Employees"
//   })
//     // .then(function(answer) {
//     //   connection.query("SELECT * FROM job_list.employees_id;", function (err, res) {
//     //     if (err) throw err;
//     //     console.table(answer.emp);   
//     //   });
//     //   runSearch();
//     // });
//   // .then(function(answer) {
//   // var query = "SELECT * FROM job_list.employees_id;";
//   // connection.query(query, { emp: answer.emp }, function(err, res) {
//   // if (err) throw err;
//   //   })
//   //   runSearch();
//   // });
// };


function viewEmp() {
  //console.log("View all Employees");
  connection.query("SELECT * FROM job_list.employees_id", function (err, res) {
      if (err) throw err;
   {
          console.table(res)
      } 
      runSearch();
  });
 
}

function viewDep() {
  //console.log("View all Departments");
  connection.query("SELECT department_id FROM job_list.employees_id;", function (err, res) {
    if (err) throw err;
    {
           console.table(res)
       } 
       runSearch();
   });
  
 };

function viewMan() {
  //console.log("View Manager");
  connection.query("SELECT manager_id FROM job_list.employees_id;", function (err, res) {
    if (err) throw err;
    {
           console.table(res)
       } 
       runSearch();
   });
};

function viewRoles() {
  //console.log("View all Employees");
  connection.query("SELECT role_id FROM job_list.employees_id;", function (err, res) {
    if (err) throw err;
    {
           console.table(res)
       } 
       runSearch();
   });
};

////
// function to handle posting new items up for auction
function addEmp() {
  // prompt for info about the item being put up for auction
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What's the first name?"
      },
      {
        name: "item2",
        type: "input",
        message: "Whats the last name?"
      },
      {
        name: "item3",
        type: "input",
        message: "What's their role?"
      },
      {
        name: "item4",
        type: "input",
        message: "What's their department?"
      },
    ])
    .then(function(answer) {
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO employees_id SET ?",
        {
          first_names: answer.item,
          last_name: answer.item2,
          role_id: answer.item3,
          department_id: answer.item4,
        },
        function(err) {
          if (err) throw err;
          console.log(" successful!");
          // re-prompt the user for if they want to bid or post
          runSearch();
        }
      );
    });
}
/////
function updateEmp() {
 
    connection.query("SELECT * FROM job_list.employees_id", function (err, res) {
    if (err) throw err;
 {
        console.table(res)
 
      // once you have the items, prompt the user for which they'd like to bid on
      
      inquirer
        .prompt([
          {
            name: "choice",
            type: "rawlist",
            choices: function() {
              var choice = [];{for (var i = 0; i < res.length; i++)
                choice.push(res[i].first_name);
              }
              return choice;
            },
            
            message: "What would you like to update?"
          }, 
          {
            name: "bid",
            type: "input",
            message: "How much would you like to bid?"
          }
        ])
    .then(function(answer) {
      // when finished prompting, insert a new item into the db with that info
      inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What's the first name?"
      },
      {
        name: "item2",
        type: "input",
        message: "Whats the last name?"
      },
      {
        name: "item3",
        type: "input",
        message: "What's their role?"
      },
      {
        name: "item4",
        type: "input",
        message: "What's their department?"
      },
    ])
      connection.query(
        "UPDATE employees_id SET ? WHERE ?",
        {
          first_names: answer.item,
          last_name: answer.item2,
          role_id: answer.item3,
          department_id: answer.item4,
        },
        function(err) {
          if (err) throw err;
          console.log(" successful!");
          // re-prompt the user for if they want to bid or post
          runSearch();
        }
      );
    });
  } 
});
};




// connection.query(
//   "UPDATE auctions SET ? WHERE ?",
    // once you have the items, prompt the user for which they'd like to bid on
 



//
// connection.query("SELECT * FROM job_list.employees_id;", function (err, result) {
//   console.table(result);  
//   runSearch();
//  });




//  .then(function viewEmp(answer) {
//   var query = "SELECT * FROM job_list.employees_id;";
//   connection.query(query,function(err, res) { 
//     if (err) throw err;
//     console.table(result)
//     runSearch();
//   });
// });
// };




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