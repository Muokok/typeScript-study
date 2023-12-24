"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
exports.data = [
    // PDF 11p 참고
    // data라는 변수에 타입을 지정하지 않음. 왜냐?
    // 변수 선언과 동시에 초기화를 해줬기에 초기화한 내용(id:1, task: "장보기")이
    // data라는 변수에 type이 지정이 됐다. 이걸 타입 추론(타입 인퍼런스)라고 한다.
    { id: 1, task: "장보기", complete: true },
    { id: 2, task: "TS 화이팅", complete: false },
];
