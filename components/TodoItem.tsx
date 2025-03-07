"use client";

import type { FC, ReactElement } from "react";
import type { Todo } from "@/context/Todo";
import { useState } from "react";
import cn from "classnames";
import { useTodosContext } from "@/hooks/useTodosContext";
import TodoEditModal from "@/components/TodoEditModal";

type Props = Todo;

const TodoItem: FC<Props> = ({ id, content, completed }): ReactElement => {

    const { changeStatus, removeTodo } = useTodosContext();
    const [modalVisibility, setModalVisibility] = useState<boolean>(false);

    return (
        <>
            <div className="flex items-center gap-x-4 p-4 bg-neutral-800 text-white rounded-md">
                <span className={cn("flex-1", completed && "line-through")}>{ content }</span>
                <button className="py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg cursor-pointer transition-colors"
                        onClick={() => setModalVisibility(true)}>
                    Edit
                </button>
                <button className={cn(
                            "py-2 px-4 bg-green-500 hover:bg-green-600 rounded-lg cursor-pointer transition-colors"
                        )}
                        onClick={() => changeStatus(id)}>
                    Complete
                </button>
                <button className="py-2 px-4 bg-red-500 hover:bg-red-600 rounded-lg cursor-pointer transition-colors"
                        onClick={() => removeTodo(id)}>
                    Delete
                </button>
            </div>
            { modalVisibility && <TodoEditModal setVisibility={setModalVisibility} id={id} /> }
        </>
    );

}

export default TodoItem;