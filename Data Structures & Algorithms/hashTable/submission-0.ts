class HashTable {
    capacity: number;
    size: number;
    hash: [number, number][][] // buckets array

    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.size = 0;
        this.hash = Array.from({ length: capacity }, () => [])
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    insert(key: number, value: number): void {
        const bucket = this.hash[this.getIndex(key)];
        const existing = bucket.find(([k]) => k === key)

        if (existing) {
            existing[1] = value;
        } else {
            bucket.push([key, value]);
            this.size++;
            this.checkLoadFactor();
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key: number): number {
        const bucket = this.hash[this.getIndex(key)];
        const existing = bucket.find(([k]) => k === key);
        if (!existing) return -1
        return existing[1];
    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    remove(key: number): boolean {
        const bucket = this.hash[this.getIndex(key)];
        const existing = bucket.findIndex(([k]) => k === key);
        if (existing === -1) return false;
        bucket.splice(existing, 1);
        this.size--;
        return true;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }

    /**
     * @return {void}
     */
    resize(): void {
        const prevHash = this.hash;
        this.capacity *= 2;
        this.hash = Array.from({ length: this.capacity }, () => []);
        for (const bucket of prevHash) {
            for (const [key, value] of bucket) {
                this.hash[this.getIndex(key)].push([key, value])
            }
        }

    }

    /**
     * @return {void}
    */
    private checkLoadFactor(): void {
        if (this.getSize() / this.getCapacity() >= 0.5) {
            this.resize();
        }
    }

    private getIndex(key: number): number {
        return ((key % this.capacity) + this.capacity) % this.capacity;
    }
}
