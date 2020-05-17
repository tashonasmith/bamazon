var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    menu(); 
});  

function menu() {
    inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "Please choose an option",
            choices: ["View all products for sale", "View low inventory"]
        }
    ])
    .then(function(answer) {
        if (answer.options === "View all products for sale") {
            viewAll();
        }
        else if (answer.options === "View low inventory") {
            viewLow();
        }
    })
}

function viewAll() {
    connection.query("SELECT * FROM `products`",
        function (err, response) {
            if (err) throw err;
            for (var i = 0; i < response.length; i++) {
                console.log("Item ID: " + response[i].item_id);
                console.log("Item Name: " + response[i].product_name);
                console.log("Department: " + response[i].department_name);
                console.log("Price: " + response[i].price)
                console.log("Stock Quantity: " + response[i].stock_quantity);
                console.log("------------------------------");
            }
            connection.end();
        }); 
};

function viewLow() {
    connection.query("SELECT * FROM `products` WHERE `stock_quantity` < 10",
        function(err, response) {
            if (err) throw err;
            for (var i = 0; i < response.length; i++) {
                console.log("Item ID: " + response[i].item_id);
                console.log("Item Name: " + response[i].product_name);
                console.log("Department: " + response[i].department_name);
                console.log("Price: " + response[i].price)
                console.log("Stock Quantity: " + response[i].stock_quantity);
                console.log("------------------------------"); 
            }
            connection.end();
        });
};