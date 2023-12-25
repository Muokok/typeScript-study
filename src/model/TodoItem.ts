class TodoItem{
    /*
        아래 부분처럼 접근 지정자를 정의해야 하는데 이는 두 번이나 작성해야 해서 번거롭다.
        public id : number; // private, public, protected
        public task : string;
        public complete : boolean;
    */
    //그래서 생성자에 접근 지정자를 함께 설정해준다.
    constructor(
        public id:number,
        public task:string,
        public complete:boolean = false
        // 생성자로 TodoItem을 생성할 때 id와 task값만 넘겨주면 complete는 자동으로(default) false가 된다.
    ) {
        this.id= id;
        this.task= task;
        this.complete= complete;
    }
    printDetails(): void { //return 값이 존재하지 않을 때 void로 해준다.
        console.log(
            `${this.id}\t${this.task}\t${this.complete ? "\t(complete)":""}`
        );
    }
}
export default TodoItem;