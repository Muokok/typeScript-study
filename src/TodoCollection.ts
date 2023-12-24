import TodoItem from "./TodoItem";


class TodoCollection{
    private nextId : number = 1;

    constructor(public userName:string, public todoItems:TodoItem[] = []) {}

    getTodoById(id:number): TodoItem | undefined{ // undefined인 이유는 찾는 item이 없을 수도 있기 때문이다.
        return this.todoItems.find((item) => item.id ===id);
        // 여기서 find는 for each처럼 todoItems 배열에 있는 값들을 하나씩 가져와서 화살표 함수의 item에 던져준다.
        // item.id 와 id가 같으면 item을 return 한다.
    }

    addTodo(task:string): number{
        while(this.getTodoById(this.nextId)){
            this.nextId++;
        }
        this.todoItems.push(new TodoItem(this.nextId,task)); // complement는 default값이 false로 존재하므로 추가해도 되고 안해도 된다.
        return this.nextId;
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