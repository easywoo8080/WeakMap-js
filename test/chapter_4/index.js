import { WeakMapManager as WeakMapManager } from "./WeakMapManager.js"; // keyManager 모듈을 import합니다.
const wmm = new WeakMapManager(); // 인스턴스를 하나만 유지

let data_store = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 데이터 저장소를 초기화합니다.

// 데이터를 랜덤으로 변경합니다.
let data = data_store.map((item) => Math.floor(Math.random() * 100)); 


wmm.add('id01', data); // 키를 사용하여 데이터를 저장합니다.

console.log(wmm); // 추가된 wmm 상태를 출력합니다.

