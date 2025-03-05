"use client";

import type { Dispatch, SetStateAction, FC, ReactElement } from "react";
import type { Todo } from "@/context/Todo";
import { useState } from "react";
import cn from "classnames";
import { useTodosContext } from "@/hooks/useTodosContext";

interface Props extends Pick<Todo, "id"> {
    setVisibility: Dispatch<SetStateAction<boolean>>;
}

const TodoEditModal: FC<Props> = ({ id, setVisibility }): ReactElement => {

    const { items, changeContent } = useTodosContext();
    const item = items[id];

    const [value, setValue] = useState<string>(item.content);

    const submitClickHandler = (): void => {
        setVisibility(false);
        changeContent(id, value);
    }

    return (
        <div className="w-full h-full fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/05">
            <div className="relative flex flex-col gap-y-6 bg-neutral-800 p-4 rounded-lg">
                <h3 className="text-xl text-white">Edit Todo</h3>
                <input type="text"
                       value={value}
                       className="w-full py-2 px-4 bg-neutral-700 text-white rounded-lg"
                       onChange={e => setValue(e.target.value)} />
                <button type="button"
                        className={cn(
                            "w-full py-2 px-4 bg-green-500 hover:bg-green-600 rounded-lg",
                            "cursor-pointer transition-colors"
                        )}
                        onClick={submitClickHandler}>
                    Submit
                </button>
                <button type="button"
                        className={cn(
                            "w-6 h-6 flex items-center justify-center bg-neutral-700 hover:bg-neutral-600 rounded-lg",
                            "absolute top-4 right-4 align-middle",
                            "cursor-pointer transition-colors"
                        )}
                        onClick={() => setVisibility(false)}>
                    x
                </button>
            </div>
        </div>
    );

}

export default TodoEditModal;