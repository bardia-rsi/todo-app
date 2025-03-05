import type { FC, ReactElement } from "react";

const HomePage: FC = (): ReactElement => {
  return (
      <div className="container py-4 mx-auto">
        <h1 className="text-3xl text-center">Todo App</h1>
      </div>
  );
}

export default HomePage;