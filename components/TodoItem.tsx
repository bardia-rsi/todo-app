"use client";

import type { FC, ReactElement } from "react";
import type { Todo } from "@/context/Todo";
import cn from "classnames";
import { useTodosContext } from "@/hooks/useTodosContext";

type Props = Todo;

const TodoItem: FC<Props> = ({ id, content, completed }): ReactElement => {

    const { changeStatus, removeTodo } = useTodosContext();

    return (
        <div className="flex items-center gap-x-4 p-4 bg-neutral-800 text-white rounded-md">
            <span className={cn("flex-1", completed && "line-through")}>{ content }</span>
            <button className="py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg cursor-pointer transition-colors">
                Edit
            </button>
            <button className="py-2 px-4 bg-green-500 hover:bg-green-600 rounded-lg cursor-pointer transition-colors"
                    onClick={() => changeStatus(id)}>
                Complete
            </button>
            <button className="py-2 px-4 bg-red-500 hover:bg-red-600 rounded-lg cursor-pointer transition-colors"
                    onClick={() => removeTodo(id)}>
                Delete
            </button>
        </div>
    );

}

export default TodoItem;