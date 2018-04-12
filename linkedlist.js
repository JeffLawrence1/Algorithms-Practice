function Node(val) {
    this.val = val;
    this.next = null;
}

function SinglyLinkedList() {
    this.head = new Node("head");
}

SinglyLinkedList.prototype.find = function(val) {
    var currentNode = this.head;
    while (currentNode.val != val) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

SinglyLinkedList.prototype.insert = function(newVal, val) {
    var newNode = new Node(newVal);
    var current = this.find(val);
    newNode.next = current.next;
    current.next = newNode;
}

SinglyLinkedList.prototype.display = function() {
    var currentNode = this.head;

    while (currentNode.next != null) {
        console.log(currentNode.next.val);
        currentNode = currentNode.next;
    }
}

SinglyLinkedList.prototype.findPrevious = function(val) {
    var currentNode = this.head;

    while (currentNode.next != null && currentNode.next.val != val) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

SinglyLinkedList.prototype.remove = function(val) {
    var previousNode = this.findPrevious(val);

    if (previousNode.next.val === val) {
        previousNode.next = previousNode.next.next;

    }
}

var cities = new SinglyLinkedList();
cities.insert("Los Angeles", "head");
cities.insert("San Francisco", "Los Angeles");
cities.insert("Seattle", "San Francisco");
cities.display();
console.log("Removing San Francisco");
cities.remove("San Francisco")
cities.display();
cities.insert("New York", "Seattle")
cities.display();

var basketballTeams = new SinglyLinkedList();
basketballTeams.insert("Lakers", "head");
basketballTeams.insert("Blazers", "Lakers");
basketballTeams.insert("Celtics", "Blazers");
basketballTeams.insert("Kings", "Celtics");
basketballTeams.display();
console.log("Removing Celtics");
basketballTeams.remove("Celtics");
basketballTeams.display();