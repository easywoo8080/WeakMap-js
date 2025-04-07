
class KeyManager {
    constructor() {
        this.keys = new Map();
    }

    getKey(name, desc = null) {
        if (!this.keys.has(name)) {
            this.keys.set(name, Object.freeze({ key: name, description: desc }));
        }
        return this.keys.get(name);
    }

    deleteKey(name) {
        this.keys.delete(name);  // 주어진 name으로 키 삭제
    }
}

export { KeyManager };