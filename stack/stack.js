// stack.js
var Stack = (function() {
    function Stack() {
        this.dataStore = [];
        this.top = 0;
    }
    Stack.prototype.push = function(item) {
        // your code here
        this.dataStore.push(item);
        // return;
    }
    Stack.prototype.pop = function() {
        // your code here
        this.dataStore.pop();
        // return;
    }
    Stack.prototype.display = function() {
        // your code here
        console.log(this.dataStore);
        // return;
    }
    return Stack;
})();
module.exports = Stack;