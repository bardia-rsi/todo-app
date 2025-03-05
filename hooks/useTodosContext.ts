"use client";

import { useContext } from "react";
import { TodosContext } from "@/context/Todo";

const useTodosContext = () => useContext(TodosContext);

export { useTodosContext };