"use client";

import type { ReactNode, FC, ReactElement } from "react";
import { createContext, useState, useCallback } from "react";
import { nanoid } from "nanoid";

interface Props {
    children: ReactNode;
}

type TodoID = string;

interface Todo {
    id: TodoID;
    content: string;
    completed: boolean;
}

type Todos = Record<TodoID, Todo>;

interface TodosContextStructure {
    items: Todos;
    addTodo: (content: string) => void;
    removeTodo: (id: TodoID) => void;
    changeStatus: (id: TodoID) => void;
    changeContent: (id: TodoID, content: string) => void;
}

const defaultTodosContext: TodosContextStructure = {
    items: {},
    addTodo: () => {},
    removeTodo: () => {},
    changeStatus: () => {},
    changeContent: () => {},
}

const TodosContext = createContext<TodosContextStructure>(defaultTodosContext);

const TodosContextProvider: FC<Props> = ({ children }): ReactElement => {

    const [items, setItems] = useState<Todos>({});

    const addTodo = useCallback(
        (content: string): void => {

            const newTodoID: TodoID = nanoid();

            setItems(prevState => {

                prevState[newTodoID] = {
                    id: newTodoID,
                    content: content,
                    completed: false
                }

                return prevState;

            });

        },
        []
    );

    const removeTodo = useCallback(
        (id: TodoID): void => {
            setItems(prevState => {

                delete prevState[id];

                return prevState;

            });
        },
        []
    );

    const changeStatus = useCallback(
        (id: TodoID): void => {
            setItems(prevState => {

                prevState[id].completed = !prevState[id].completed;

                return prevState;

            });
        },
        []
    );

    const changeContent = useCallback(
        (id: TodoID, content: string): void => {
            setItems(prevState => {

                prevState[id].content = content;

                return prevState;

            });
        },
        []
    )

    return (
        <TodosContext.Provider value={{ items, addTodo, removeTodo, changeStatus, changeContent }}>
            { children }
        </TodosContext.Provider>
    );

}

export { TodosContext };

export default TodosContextProvider;