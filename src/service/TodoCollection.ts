import TodoItem from "../model/TodoItem";
import {ItemCounts} from "../model/ItemCounts";


class TodoCollection{
    private nextId : number = 1;
    private itemMap: Map<number, TodoItem>; // 7강 Map 객체로 변환하기

    constructor(public userName:string, todoItems:TodoItem[] = []) { // public todoItems이었던 것을 todoItems로 생성자의 파라미터로 변경
        this.itemMap = new Map<number, TodoItem>(); // 여기에 왜 ()가 있는건지?
        todoItems.forEach((item) => this.itemMap.set(item.id, item));

    }

    getTodoById(id:number): TodoItem | undefined{ // undefined인 이유는 찾는 item이 없을 수도 있기 때문이다.
        return this.itemMap.get(id);
    }

    addTodo(task:string): number{
        while(this.getTodoById(this.nextId)){
            this.nextId++;
        }
        this.itemMap.set(this.nextId,new TodoItem(this.nextId,task)); // complement는 default값이 false로 존재하므로 추가해도 되고 안해도 된다.
        return this.nextId;
    }

    // includeComplete -> true라면 모든 할일 목록 반환
    // includeComplete -> false라면 완료 목록을 제외한 할일 목록 반환
    getTodoItems(includeComplete: boolean):TodoItem[]{
        return [...this.itemMap.values()].filter(
            (item) => includeComplete || !item.complete
        );
    }

    removeComplete():void{
        this.itemMap.forEach((item) =>{
            if(item.complete){
                this.itemMap.delete(item.id);
            }
        })
    }

    getItemCount() : ItemCounts {
        return {
            total : this.itemMap.size,
            incomplete : this.getTodoItems(false).length
        }
    }

    // id를 톷ㅇ해 toDo를 찾아서 complete를 바꿔준다.
    markComplete(id:number, complete:boolean){
        const todoItem = this.getTodoById(id);
        if(todoItem){
            todoItem.complete = complete;
        }
    }
}

export default TodoCollection;