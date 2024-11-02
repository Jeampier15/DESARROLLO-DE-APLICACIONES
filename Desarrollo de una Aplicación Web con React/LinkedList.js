class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Añadir nodo al final de la lista
    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Buscar nodo por ID
    find(id) {
        let current = this.head;
        while (current) {
            if (current.data.id === id) return current;
            current = current.next;
        }
        return null;
    }

    // Actualizar nodo por ID
    update(id, newData) {
        let current = this.head;
        while (current) {
            if (current.data.id === id) {
                current.data = { ...current.data, ...newData };
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Eliminar nodo por ID
    delete(id) {
        if (!this.head) return null;

        if (this.head.data.id === id) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data.id === id) {
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Obtener todos los datos
    getAll() {
        const nodes = [];
        let current = this.head;
        while (current) {
            nodes.push(current.data);
            current = current.next;
        }
        return nodes;
    }
}

export default LinkedList;
