# bamazon

Welcome to Bamazon!  Bamazon is a CLI app with an Amazon-like storefront that takes in orders from customers and depletes stock from the store's inventory.  There is also an assistant manager view which provides detailed information for all items, and an option to view low inventory items.

NPM packages used: MySQL and Inquirer

Customer View:
1. To view all items available for purchase, type `node bamazonCustomer.js` into the terminal.
2. You will be prompted to enter both the item ID and quantity for the item that you would like to order.
3.  If there is enough inventory available to fulfill your order, you will be given your order total.
4. If there is not enough inventory available to fulfill your order, you will be told that there is insufficient quantity, and you will have to start your order over again.

Assistant Manager View:
1. For Assistant Manager access (more limited than Manager), type `node bamazonAssistantMgr.js` into the terminal.
2. You will be given the option to either detailed information for all products, or just for low inventory items.  Use arrow keys to select the option you prefer, and the requested information will be displayed.

--Here is a YouTube link to view MySQL database creation and Bamazon CLI in action! [Link to YouTube](https://youtu.be/_rH6BeDUo6Y)