import type { FC, ReactElement } from "react";
import TodosContextProvider from "@/context/Todo";

const HomePage: FC = (): ReactElement => {
  return (
      <div className="container py-4 mx-auto">
          <h1 className="text-3xl text-center">Todo App</h1>
          <TodosContextProvider>
              todos
          </TodosContextProvider>
      </div>
  );
}

export default HomePage;