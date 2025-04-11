# WeakMap사용하기

## 💡 개요

이 프로젝트는 JavaScript의 `WeakMap`을 활용하여 안전하게 데이터를 저장하고, 불필요한 메모리 사용을 방지하는 방법을 설명합니다. `WeakMap`은 가비지 컬렉션(GC)을 통해 참조되지 않는 데이터를 자동으로 정리합니다.

---

## 🧩 핵심 개념

- `WeakMap`은 **key-value** 형태로 데이터를 저장합니다.
- **Key는 반드시 객체**여야 하며, 같은 이름이라도 새로운 객체는 서로 다른 키로 인식됩니다.
- `WeakMap`은 전역에 선언되어도 GC의 관리 대상이 되어 **메모리 누수 방지**에 유리합니다.

---

## 🛠 키 관리 문제 해결

키의 중복 생성 및 전역 변수 관리의 불편함을 해소하기 위해 `keyManager`를 사용합니다.

- `keyManager.getKey(name)`을 통해 고유한 키 객체를 생성하고 재사용합니다.
- 키를 한 곳에서 통합 관리하여 **데이터 일관성**과 **메모리 효율성**을 확보합니다.

---

## 📦 사용 예시

```js
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


console.log('데이터 변경 후 상태 ------------------------');
data = data_store.map((item) => Math.floor(Math.random() * 100)); // 데이터를 랜덤으로 변경합니다.
wmm.add('id02', data); // 다시 삽입합니다. 값이 변경됩니다.
console.log(wmm.getData('id01'));
console.log(wmm.getData('id02'));


console.log('키 삭제 후 상태 ------------------------');
wmm.deleteKey('id01'); // 키를 삭제합니다.
console.log(wmm.getData('id01'));
console.log(wmm.getData('id02'));


console.log('key 설명 변경 후 상태 ------------------------');
console.log(wmm.getKey('id02'));
wmm.updateDesc('id02', '설명을 변경합니다.'); // 키의 설명을 업데이트합니다.
console.log(wmm.getKey('id02'));

```