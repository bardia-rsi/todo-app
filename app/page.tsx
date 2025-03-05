import type { FC, ReactElement } from "react";
import TodosContextProvider from "@/context/Todo";
import TodosContainer from "@/components/TodosContainer";

const HomePage: FC = (): ReactElement => {
  return (
      <div className="container py-4 mx-auto">
          <h1 className="text-3xl text-center mb-8">Todo App</h1>
          <TodosContextProvider>
              <TodosContainer />
          </TodosContextProvider>
      </div>
  );
}

export default HomePage;