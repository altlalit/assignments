/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.arrTodo = [];
  }
    add(todo){
      this.arrTodo.push(todo);
    }

    remove(indexOfTodo){
      if(this.arrTodo[indexOfTodo] != undefined){
        this.arrTodo = this.arrTodo.filter((_, index) => index !== indexOfTodo);
      }
    }

    update(index, updatedTodo){
      if(this.arrTodo[index] != undefined){
        this.arrTodo[index] = updatedTodo;
      }
      
    }

    getAll(){
      // console.log(this.arrTodo);
      return this.arrTodo;
    }

    get(indexOfTodo){
      // console.log(this.arrTodo[indexOfTodo]);
      if(this.arrTodo[indexOfTodo] != undefined){
        return this.arrTodo[indexOfTodo];
      }
      else{
        return null;
      }
    }

    clear(){
      this.arrTodo = [];
    }
}

module.exports = Todo;
