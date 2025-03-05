"use client";

import type { ReactNode, FC, ReactElement } from "react";
import { createContext, useState, useCallback, useEffect } from "react";
import { nanoid } from "nanoid";
import { get, cache } from "@/utils/localStorage";

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

    const [items, setItems] = useState<Todos>(defaultTodosContext.items);

    const addTodo = useCallback(
        (content: string): void => {

            const newTodo: Todo = {
                id: nanoid(),
                content: content,
                completed: false
            };

            setItems(prevState => {

                prevState[newTodo.id] = newTodo;

                // It is not recommended
                cache("todos", prevState);

                return {...prevState};

            });

        },
        []
    );

    const removeTodo = useCallback(
        (id: TodoID): void => {
            setItems(prevState => {

                delete prevState[id];

                // It is not recommended
                cache("todos", prevState);

                return {...prevState};

            });
        },
        []
    );

    const changeStatus = useCallback(
        (id: TodoID): void => {
            setItems(prevState => {

                prevState = { ...prevState, [id]:{ ...prevState[id], completed: !prevState[id].completed } };

                // It is not recommended
                cache("todos", prevState);

                return { ...prevState };
            });
        },
        []
    );

    const changeContent = useCallback(
        (id: TodoID, content: string): void => {
            setItems(prevState => {

                prevState[id].content = content;

                // It is not recommended
                cache("todos", prevState);

                return {...prevState};

            });
        },
        []
    );

    useEffect((): void => {

        const cachedItems = get<Todos>("todos");

        if (cachedItems) {
            setItems(cachedItems);
        }

    }, []);

    return (
        <TodosContext.Provider value={{ items, addTodo, removeTodo, changeStatus, changeContent }}>
            { children }
        </TodosContext.Provider>
    );

}

export type { Todo };

export { TodosContext };

export default TodosContextProvider;