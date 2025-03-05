"use client";

import type { FC, ReactElement } from "react";
import { useTodosContext } from "@/hooks/useTodosContext";
import TodoItem from "@/components/TodoItem";

const TodoContainer: FC = (): ReactElement => {

    const { items } = useTodosContext();

    return (
        <div className="flex flex-col gap-y-4">
            {
                Object.values(items).map(item => {
                    return (
                        <TodoItem key={item.id} {...item} />
                    );
                })
            }
        </div>
    );

}

export default TodoContainer;