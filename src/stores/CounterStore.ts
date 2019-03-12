import { observable } from "mobx";

class CounterStore {
  @observable count = 0;
}
const counterStore = new CounterStore();

export default counterStore;
