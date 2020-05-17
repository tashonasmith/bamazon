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
    displayAll(); 
});  

function displayAll() {
    connection.query("SELECT * FROM `products`",
        function (err, response) {
            if (err) throw err;
            for (var i = 0; i < response.length; i++) {
                console.log("Item ID: " + response[i].item_id);
                console.log("Item Name: " + response[i].product_name);
                console.log("Price: " + response[i].price)
                console.log("------------------------------");
            }
            //start();
        }); 
        
    
};