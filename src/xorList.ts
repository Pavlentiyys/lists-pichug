class XORNode {
    constructor(public data: number, public both: number = 0) {}
}

export default class XORList {
    private head: XORNode | null = null;
    private tail: XORNode | null = null;
    private nodes: Map<number, XORNode> = new Map();

    private getPointer(node: XORNode | null): number {
        return node ? this.getNodeId(node) : 0;
    }

    private getNodeId(node: XORNode): number {
        for (const [key, value] of this.nodes.entries()) {
            if (value === node) return key;
        }
        const id = Date.now();
        this.nodes.set(id, node);
        return id;
    }

    private getNode(pointer: number): XORNode | null {
        return this.nodes.get(pointer) || null;
    }

    add(data: number): void {
        const newNode = new XORNode(data);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const tailId = this.getNodeId(this.tail!);
            this.tail!.both = this.tail!.both ^ this.getPointer(newNode);
            newNode.both = this.getPointer(this.tail);
            this.tail = newNode;
        }
    }

    display(): void {
        if (!this.head) {
            console.log("XOR список пуст");
            return;
        }

        let result = "XOR список: ";
        let current: XORNode | null = this.head;
        let prev: XORNode | null = null;

        while (current) {
            result += current.data + " → ";
            const nextPointer = this.getPointer(prev) ^ current.both;
            prev = current;
            current = this.getNode(nextPointer);
        }

        console.log(result + "null");
    }

    toArray(): number[] {
        const result: number[] = [];
        if (!this.head) return result;

        let current: XORNode | null = this.head;
        let prev: XORNode | null = null;

        while (current) {
            result.push(current.data);
            const nextPointer = this.getPointer(prev) ^ current.both;
            prev = current;
            current = this.getNode(nextPointer);
        }

        return result;
    }
}