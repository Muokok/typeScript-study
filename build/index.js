"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("./TodoItem"));
const data_1 = require("./data");
const TodoCollection_1 = __importDefault(require("./TodoCollection"));
/*
console.log('My Todo List');
for(let i=0; i<data.length; i++){
    // 여기 i,TodoItem 부분도 타입을 지정하지 않았다.
    // 왜냐? 초기화를 통한 타입 추론 기능으로 타입을 유추할 수 있기 때문이다.
    let todoItem = new TodoItem(data[i].id,data[i].task,data[i].complete);
    todoItem.printDetails();
}*/
const sampleTodos = data_1.data.map((item) => new TodoItem_1.default(item.id, item.task, item.complete));
const myTodoCollection = new TodoCollection_1.default("My Todo List", sampleTodos);
myTodoCollection.addTodo("자스 공부하기");
myTodoCollection.addTodo("술 마시자");
myTodoCollection.markComplete(3, true);
console.log(`${myTodoCollection.userName}`);
myTodoCollection.todoItems.forEach((item) => item.printDetails());
