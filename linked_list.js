// 1 => 2 => 3 => 4 => 5
// head                 tail

class Node{
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}


class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
        this.tail = null;
    }

    insertAtFirst(value){
        let node = new Node(value);
        if(this.head === null){
            this.head = node;
            this.tail = this.head;
            this.size++;
            return;
        }
        let temp = this.head;
        this.head = node;
        this.head.next = temp;
        this.size++;
    }

    get(){
        let temp = this.head;
        while(temp !== null){
            console.log(temp.value);
            temp = temp.next;
        }
    }

    add(value){
        if(this.size === 0){
            this.insertAtFirst(value);
            return;
        }
        let node = new Node(value);

    }

    insertAtLast(value){
        if(this.head === null){
            this.insertAtFirst(value)
            return;
        }
        let node = new Node(value);
        let temp = this.tail;
        temp.next = node;
        this.tail = node;
        this.size++
    }

    insertAt(index, value){
        if(this.head === null){
            this.insertAtFirst(value)
            return;
        }
        if(index === 0){
            this.insertAtFirst(value)
            return;
        }
        if(index >= this.size){
            this.insertAtLast(value)
            return;
        }
        let node = new Node(value);
        let temp = this.head;
        for(let i=1; i<index;i++){
            temp = temp.next
        }
        node.next = temp.next;
        temp.next = node;
        this.size++;

    }

    reverse(){
        // 1 -> 2 -> 3 -> 4 -> 5 -> null
        // 5 -> 4 -> 3 -> 2 -> 1 -> null
        //
        function reverseMethod(current){

            if(current.next === null){
                return current;
            }
            let node = this.reverseMethod(current.next)
            node.next = current;
            return node;
        }

        reverseMethod(this.head)






        // let current = this.head;
        // let prev = null;
        // while(current !== null){
        //     let temp = current.next
        //     current.next = prev;
        //     prev = current;
        //     current = temp;
        // }

        // this.head = prev;
    }
}

let ll = new linkedList();
ll.insertAtFirst(2);
ll.insertAtFirst(24);
ll.insertAtFirst(34);
ll.insertAtFirst(44);
ll.insertAtFirst(54);
ll.insertAtFirst(64);
ll.insertAtLast(100)
ll.insertAt(4,200)
ll.get()
ll.reverse()
ll.get()
// console.log(ll.size, 'size')
// console.log(ll.tail, 'tail')
// console.log(ll.head, 'head')