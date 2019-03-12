import ProductStore from "./ProductStore";
import todoStore from "./TodosStore";
import { createContext } from "react";

export const rootStore = {
  product: ProductStore,
  todos: todoStore
};

export const RootStoreContext = createContext(rootStore);
