class WeakMapManager {
    constructor() {
        this.keys = new Map();
        this.weakMap = new WeakMap();
    }

    // id로 키를 설정하고, 없으면 생성하는 메서드
    setKey(id, desc = null) {
        let keyObj = this.keys.get(id);

        if (!keyObj) {
            keyObj = { id: id, description: desc };
            this.keys.set(id, keyObj);  // Map에 새로 추가
        }

        return keyObj;
    }

    // id로 값을 가져오는 메서드
    getKey(id) {
        let keyObj = this.keys.get(id);

        if (keyObj) {
            return keyObj;
        } else {
            console.log("Key not found");
            return this.setKey(id);  // 키가 없을 경우 키 생성 반환
        }
    }

    // id로 값을 추가하는 메서드
    add(id, value) {
        const keyObj = this.getKey(id);  // setKey 호출해서 id로 키를 얻음
        this.weakMap.set(keyObj, value);  // WeakMap에 값을 추가
    }

    // description 수정
    updateDesc(id, newDesc) {
        let keyObj = this.keys.get(id);
        if (keyObj) {
            keyObj.description = newDesc;  // 기존 객체의 desc 값만 수정
        } else {
            console.log("Key not found");
        }
    }

    // 키 삭제
    deleteKey(id) {
        const keyObj = this.keys.get(id);
        if (keyObj) {
            this.keys.delete(id);  // Map에서 삭제
            this.weakMap.delete(keyObj);  // WeakMap에서 삭제
        }
    }
}

export { WeakMapManager };
