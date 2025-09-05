class DoublyNode {
    constructor(
        public data: number, 
        public next: DoublyNode | null = null,
        public prev: DoublyNode | null = null
    ) {}
}

export default class DoublyList {
    private head: DoublyNode | null = null;
    private tail: DoublyNode | null = null;

    add(data: number): void {
        const newNode = new DoublyNode(data);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail!.next = newNode;
            this.tail = newNode;
        }
    }

    display(): void {
        let current = this.head;
        let result = "Двусвязный список: ";
        
        while (current) {
            result += current.data + " ⇄ ";
            current = current.next;
        }

        console.log(result + "null");
    }

    displayBackwards(): void {
        let current = this.tail;
        let result = "Обратный порядок: ";
        
        while (current) {
            result += current.data + " ⇄ ";
            current = current.prev;
        }

        console.log(result + "null");
    }

    toArray(): number[] {
        const result: number[] = [];
        let current = this.head;
        
        while (current) {
            result.push(current.data);
            current = current.next;
        }

        return result;
    }
}