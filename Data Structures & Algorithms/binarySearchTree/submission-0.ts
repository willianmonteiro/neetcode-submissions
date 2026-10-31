class TreeNode {
    key: number;
    value: number;

    left: TreeNode | null;
    right: TreeNode | null;

    constructor(key: number, value: number) {
        this.key = key
        this.value = value

        this.left = null;
        this.right =  null;
    }
}

class TreeMap {
    root: TreeNode | null;

    constructor() {
        this.root = null
    }

    /**
     * @param {number} key
     * @param {number} val
     * @returns {void}
     */
    insert(key: number, val: number): void {
        if (!this.root) {
            this.root = new TreeNode(key, val);
            return;
        }

        let current = this.root;

        while (current) {
            if (key === current.key) {
                current.value = val;
                return;
            }

            if (key < current.key) {
                if (!current.left) {
                    current.left = new TreeNode(key, val);
                    return;
                }
                current = current.left;
            } else if (key > current.key) {
                if (!current.right) {
                    current.right = new TreeNode(key, val);
                    return;
                }
                current = current.right;
            }
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key: number): number {
        let current = this.root;
        while (current) {
            if (key === current.key) return current.value;
            if (key < current.key) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return -1;
    }

    /**
     * @returns {number}
     */
    getMin(): number {
        let current = this.root;
        while (current) {
            if (!current.left) {
                return current.value
            };
            current = current.left;
        }
        return -1;
    }

    /**
     * @returns {number}
     */
    getMax(): number {
        let current = this.root;
        while (current) {
            if (!current.right) {
                return current.value
            };
            current = current.right;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key: number): void {
        const removeNode = (
            node: TreeNode | null,
            key: number
        ): TreeNode | null => {
            if (!node) return null;

            if (key < node.key) {
                node.left = removeNode(node.left, key);
            } else if (key > node.key) {
                node.right = removeNode(node.right, key);
            } else {
                if (!node.left) return node.right;
                if (!node.right) return node.left;

                let successor = node.right;

                while (successor.left) {
                    successor = successor.left;
                }

                node.key = successor.key;
                node.value = successor.value;

                node.right = removeNode(
                    node.right,
                    successor.key
                );
            }

            return node;
        };

        this.root = removeNode(this.root, key);
    }

    /**
     * @returns {number[]}
     */
    getInorderKeys(): number[] {
        const result: number[] = [];
        const traverse = (node: TreeNode | null): void => {
            if (!node) return;
            traverse(node.left);
            result.push(node.key);
            traverse(node.right);
        };

        traverse(this.root);
        return result;
    }
}
