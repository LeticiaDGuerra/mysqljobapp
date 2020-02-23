# Unit 12 MySQL Homework: Employee Tracker

Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as **C**ontent **M**anagement **S**ystems. In this homework assignment, your challenge is to architect and build a solution for managing a company's employees using node, inquirer, and MySQL.

## Instructions

We had to design three tables:

CREATE database job_list;

USE job_list;

CREATE TABLE department_id (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role_id (
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE employee_id (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,

  PRIMARY KEY (id)
);
SELECT * FROM job_list.department_id;
SELECT * FROM job_list.employee_id;
SELECT * FROM job_list.role_id;

Build an application that:

  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles


## User Story

We had to build an application that  add departments, roles, employees, Views departments, roles, employees and Update employee roles.
