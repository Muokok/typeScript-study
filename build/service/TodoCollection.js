"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("../model/TodoItem"));
class TodoCollection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.nextId = 1;
        this.itemMap = new Map(); // 여기에 왜 ()가 있는건지?
        todoItems.forEach((item) => this.itemMap.set(item.id, item));
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new TodoItem_1.default(this.nextId, task)); // complement는 default값이 false로 존재하므로 추가해도 되고 안해도 된다.
        return this.nextId;
    }
    // includeComplete -> true라면 모든 할일 목록 반환
    // includeComplete -> false라면 완료 목록을 제외한 할일 목록 반환
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()].filter((item) => includeComplete || !item.complete);
    }
    removeComplete() {
        this.itemMap.forEach((item) => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }
    getItemCount() {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
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
