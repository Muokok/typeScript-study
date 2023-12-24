"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("./TodoItem"));
class TodoCollection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextId = 1;
    }
    getTodoById(id) {
        return this.todoItems.find((item) => item.id === id);
        // 여기서 find는 for each처럼 todoItems 배열에 있는 값들을 하나씩 가져와서 화살표 함수의 item에 던져준다.
        // item.id 와 id가 같으면 item을 return 한다.
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.todoItems.push(new TodoItem_1.default(this.nextId, task)); // complement는 default값이 false로 존재하므로 추가해도 되고 안해도 된다.
        return this.nextId;
    }
    // id를 톷ㅇ해 toDo를 찾아서 complete를 바꿔준다.
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
exports.default = TodoCollection;
