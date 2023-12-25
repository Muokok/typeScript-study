import * as inquirer from 'inquirer'; // inpuirer를 통해 입력을 받는다.
import TodoCollection from "../service/TodoCollection";
import TodoItem from "../model/TodoItem";
import {data} from "../data";
import {Commands} from "../model/Commands";


class TodoConsole{
    private todoCollection : TodoCollection;

    constructor() {
        const sampleTodos: TodoItem [] = data.map(
            (item) => new TodoItem(item.id, item.task, item.complete)
        )
        this.todoCollection = new TodoCollection('My Todo List',sampleTodos)

    }

    displayTodoList():void{
        console.log(
            `====${this.todoCollection.userName}====`+
            `(${this.todoCollection.getItemCount().incomplete}) items todo`
        )
        this.todoCollection.getTodoItems(true).forEach((item) => item.printDetails());
    }

    promptUser():void{
        console.clear();
        this.displayTodoList();

        // @ts-ignore
        inquirer
            .prompt({ // 이 부분 에러남. 고쳐야 한다.
            type: 'list',
            name: 'command',
            message: 'Choose option',
            choices: Object.values(Commands),
        })
            .then((answers) => { // 여기서 then은 inquirer.prompt를 실행 후 해야할 일을 설정
            if(answers["command"] !== Commands.Quit){
                this.promptUser();
            }
        })
    }
}

export default TodoConsole;