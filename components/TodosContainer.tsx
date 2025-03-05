"use client";

import type { FC, ReactElement } from "react";
import { useState } from "react";
import cn from "classnames";
import { useTodosContext } from "@/hooks/useTodosContext";
import TodoItem from "@/components/TodoItem";
import TodoAddModal from "@/components/TodoAddModal";

const TodoContainer: FC = (): ReactElement => {

    const { items } = useTodosContext();
    const [modalVisibility, setModalVisibility] = useState<boolean>(false);

    return (
        <>
            <div className="flex flex-col gap-y-4">
                {
                    Object.values(items).map(item => {
                        return (
                            <TodoItem key={item.id} {...item} />
                        );
                    })
                }
                <button type="button"
                        className={cn(
                            "w-full py-2 px-4 bg-green-500 hover:bg-green-600 rounded-lg",
                            "cursor-pointer transition-colors"
                        )}
                        onClick={() => setModalVisibility(true)}>
                    Add Todo
                </button>
            </div>
            { modalVisibility && <TodoAddModal setVisibility={setModalVisibility} /> }
        </>
    );

}

export default TodoContainer;