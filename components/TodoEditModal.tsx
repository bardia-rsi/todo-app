"use client";

import type { Dispatch, SetStateAction, FC, ReactElement } from "react";
import type { Todo } from "@/context/Todo";
import { useState } from "react";
import cn from "classnames";
import { useTodosContext } from "@/hooks/useTodosContext";
import Modal from "@/components/Modal";

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
        <Modal setVisibility={setVisibility} title="Edit Todo">
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
        </Modal>
    );

}

export default TodoEditModal;