import React, { useEffect, useContext } from "react";
import { TodosDTO } from "./types";
import { RootStoreContext } from "../../stores/rootStore";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

export const Todos = observer(() => {
  const rootStore = useContext(RootStoreContext);

  useEffect(() => {
    toJS(rootStore.todos.getTodos());
  }, []);

  if (toJS(rootStore.todos.isError)) {
    return <p> {toJS(rootStore.todos.isError)} </p>;
  }
  if (toJS(rootStore.todos.isLoading)) {
    return <p style={{ textAlign: "center" }}>Fetching Todos Data</p>;
  }

  const toJsTodos = toJS(rootStore.todos._todos);
  return (
    <div>
      {toJsTodos &&
        toJsTodos.map((data: TodosDTO, index?: number) => {
          return (
            <div key={data.id.toString()}>
              {data.title}
              <span>{data.id}</span>
            </div>
          );
        })}
    </div>
  );
});
