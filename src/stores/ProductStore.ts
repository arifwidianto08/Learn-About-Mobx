import { observable, action } from "mobx";
import axios from "axios";

class ProductStore {
  @observable products = {};
  @observable _todos = [];
  async fetchData() {
    const getTodos = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    const response = getTodos.data;
    try {
      this.setTodos(response);
      this._todos = response;
    } catch (error) {
      throw new Error(error);
    }
  }

  @action setTodos(todo: any) {
    this._todos = todo;
  }

  @action
  setData(data: any) {
    this.products = data;
    console.log("setdata", this.products);
  }
}

const productStore = new ProductStore();

export default productStore;
