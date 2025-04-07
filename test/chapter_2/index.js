import { KeyManager as kmgr } from "./KeyManager.js"; // keyManager 모듈을 import합니다.
const keyManager = new kmgr(); // 인스턴스를 하나만 유지
const store = new WeakMap(); // WeakMap을 사용하여 메모리 누수를 방지합니다.

let data_store = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 데이터 저장소를 초기화합니다.

setInterval(() => {

    // 데이터를 랜덤으로 변경합니다.
    const data = data_store.map((item) => Math.floor(Math.random() * 100)); 

    // 키를 생성합니다.
    let key = keyManager.getKey('id'+data[0] % 3, 'ID정보'+data[0]); 

    // 키를 사용하여 데이터를 저장합니다.
    store.set(key, data); 

    // 키 매니저의 상태를 출력합니다.
    console.log(keyManager); 

     // 저장된 데이터를 출력합니다.
    console.log(store.get(keyManager.getKey('id'+data[0] % 3)))
}, 1000);