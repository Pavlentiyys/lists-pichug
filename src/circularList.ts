class Node {
    constructor(public data: number, public next: Node | null = null) {}
}

export default class CircularList {
    private head: Node | null = null;
    private tail: Node | null = null;

    add(data: number): void {
        const newNode = new Node(data);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        }
    }

    display(): void {
        if (!this.head) {
            console.log("Список пуст");
            return;
        }

        let current = this.head;
        let result = "Кольцевой список: ";
        
        do {
            result += current.data + " → ";
            current = current.next!;
        } while (current !== this.head);

        console.log(result + "(замыкание)");
    }

    toArray(): number[] {
        const result: number[] = [];
        if (!this.head) return result;

        let current = this.head;
        do {
            result.push(current.data);
            current = current.next!;
        } while (current !== this.head);

        return result;
    }
}