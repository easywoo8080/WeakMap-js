import { WeakMapManager as WeakMapManager } from "../../modules/WeakMapManager.js"; // keyManager 모듈을 import합니다.
const wmm = new WeakMapManager(); // 인스턴스를 하나만 유지

let data_store = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 데이터 저장소를 초기화합니다.

// 데이터를 랜덤으로 변경합니다.
let data = data_store.map((item) => Math.floor(Math.random() * 100)); 

wmm.setKey('id01', '키 생성 및 설명을 생성합니다.'); // 키를 설정합니다.

wmm.add('id01', data); // 키를 사용하여 데이터를 저장합니다.


wmm.add('id02', data); // 키를 생성하지 않고 입력하면 key를 생성합니다.( 이때 다른 설명요소는 null로 설정됩니다.)
console.log('데이터 입력 후 상태 ------------------------');
console.log(wmm.getData('id01'));

console.log(wmm.getData('id02'));

data = data_store.map((item) => Math.floor(Math.random() * 100)); // 데이터를 랜덤으로 변경합니다.

wmm.add('id02', data); // 다시 삽입합니다. 값이 변경됩니다.
console.log('데이터 변경 후 상태 ------------------------');
console.log(wmm.getData('id01'));

console.log(wmm.getData('id02'));

wmm.deleteKey('id01'); // 키를 삭제합니다.
console.log('키 삭제 후 상태 ------------------------');

console.log(wmm.getData('id01'));

console.log(wmm.getData('id02'));

console.log('key 설명 변경 후 상태 ------------------------');
console.log(wmm.getKey('id02'));
wmm.updateDesc('id02', '설명을 변경합니다.'); // 키의 설명을 업데이트합니다.

console.log(wmm.getKey('id02'));


