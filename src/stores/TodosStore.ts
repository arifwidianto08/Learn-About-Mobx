import { observable, action } from "mobx";
import Axios from "axios";

export interface TodoInterface {
  _todos?: object[];
  isLoading?: boolean;
  isError?: null;

  getTodos: () => void;
}

class TodoStore {
  @observable _todos = [];
  @observable isLoading = true;
  @observable isError = null;

  async getTodos() {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    try {
      this.setTodos(response.data);
      this.isLoading = false;
    } catch (error) {
      this.isError = error;
      throw new Error(error);
    }
  }

  @action setTodos(todos: any) {
    this._todos = todos;
  }
}

const todoStore = new TodoStore();

export default todoStore;
