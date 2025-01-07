class HashTable<K, V> {
  // Internal storage
  private storage: Array<[K, V][]> = [];
  private size: number;

  constructor(size = 53) {
    // Prime number is typically used
    this.size = size;
  }

  // Hash function to convert key to index
  private hash(key: K): number {
    let total = 0;
    const stringKey = String(key);

    for (let i = 0; i < stringKey.length; i++) {
      const char = stringKey[i];
      const value = char.charCodeAt(0);
      total = (total + value) % this.size;
    }
    return total;
  }

  // Set a key-value pair
  set(key: K, value: V): void {
    const index = this.hash(key);

    if (!this.storage[index]) {
      this.storage[index] = [];
    }

    // Check if key already exists
    const existing = this.storage[index].find(item => item[0] === key);

    if (existing) {
      existing[1] = value; // Update
    } else {
      this.storage[index].push([key, value]); // Add new
    }
  }

  // Get a value by key
  get(key: K): V | undefined {
    const index = this.hash(key);
    const bucket = this.storage[index];

    if (bucket) {
      const found = bucket.find(item => item[0] === key);
      return found ? found[1] : undefined;
    }

    return undefined;
  }

  // Delete a key-value pair
  delete(key: K): boolean {
    const index = this.hash(key);
    const bucket = this.storage[index];

    if (bucket) {
      const itemIndex = bucket.findIndex(item => item[0] === key);
      if (itemIndex !== -1) {
        bucket.splice(itemIndex, 1);
        return true;
      }
    }

    return false;
  }
}

// Usage Example
const ht = new HashTable<string, number>();
ht.set('age', 30);
console.log(ht.get('age')); // 30
