"use client";

import type { Dispatch, SetStateAction, ReactNode, FC, ReactElement } from "react";
import cn from "classnames";

interface Props {
    setVisibility: Dispatch<SetStateAction<boolean>>;
    title: string;
    children: ReactNode;
}

const Modal: FC<Props> = ({ setVisibility, title, children }): ReactElement => {

    return (
        <div className="w-full h-full fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/50">
            <div className="relative flex flex-col gap-y-6 bg-neutral-800 p-4 rounded-lg">
                <h3 className="text-xl text-white">{ title }</h3>
                { children }
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

export default Modal;