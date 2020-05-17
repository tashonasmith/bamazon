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
            start();
        }); 
        
    
};

function start() {
   inquirer.prompt([
       {
           name: "id",
           type: "input",
           message:  "What is the ID of the item that you would like to order?"
       },
       {
           name: "quantity",
           type: "input",
           message: "How many units of this item would you like to order?"
       }
   ]) 
   .then(function(answer) {
       connection.query("SELECT * FROM `products` WHERE `item_id` =?", answer.id,
       function(err, response) {
         if (err) throw err;
         if (answer.quantity > response[0].stock_quantity) {
             console.log("Current stock quantity: " + response[0].stock_quantity);
             console.log("Insufficient Quantity!!");
             connection.end(); 
         }
         else {
            var newQuantity = response[0].stock_quantity - answer.quantity;
            console.log("Old stock quantity: " + response[0].stock_quantity)
            console.log("New stock quantity: " + newQuantity)
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: newQuantity
                    
                    },
                    {
                        item_id: answer.id
                    }
                ],
                function(err, res) {
                    if (err) throw err;
                    var orderTotal = answer.quantity * response[0].price;
                    console.log("Total amount due: " + orderTotal);
                    console.log("Order Complete!  Order confirmation will be emailed shortly.")
                    connection.end();  
                }
            )
         };
    
       });
   });
};